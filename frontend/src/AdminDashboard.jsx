import React, { useState, useEffect } from "react";
import "./AdminDashboard.css";

const API_URL = "http://localhost:8080/api/properties";
const API_BASE_URL = "http://localhost:8080"; // Base URL for constructing image paths

const AdminDashboard = ( ) => {
  const [properties, setProperties] = useState([]);
  const [formData, setFormData] = useState({
    id: null,
    title: "",
    price: "",
    address: "",
    city: "",
    beds: "",
    baths: "",
    sqft: "",
    garages: "",
    type: "",
    image: null, // Will hold the image file or existing URL string
  });
  const [isEditing, setIsEditing] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [errors, setErrors] = useState({});
  const [imagePreview, setImagePreview] = useState(null); // For showing selected image

  // Fetch properties on load
  useEffect(() => {
    fetchProperties();
  }, []);

  const fetchProperties = async () => {
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setProperties(data);
    } catch (error) {
      console.error("Failed to fetch properties:", error);
      alert("Failed to fetch properties. Please ensure the backend is running.");
    }
  };

  // Handle form input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: false });
  };

  // Handle image file selection
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, image: file });
      setImagePreview(URL.createObjectURL(file)); // Create a temporary preview URL
    }
  };

  // Function to upload the image and get the URL
  const handleImageUpload = async (imageFile) => {
    if (!imageFile || !(imageFile instanceof File)) {
      // If it's not a file, it's an existing URL, so just return it
      return imageFile;
    }

    const uploadData = new FormData();
    uploadData.append("file", imageFile);

    try {
      const res = await fetch(`${API_BASE_URL}/api/files/upload`, {
        method: "POST",
        body: uploadData,
      });

      if (res.ok) {
        return await res.text(); // The backend returns the new image URL as text
      }
      alert("Image upload failed. Please try again.");
      return null;
    } catch (error) {
      console.error("Failed to upload image:", error);
      alert("Failed to upload image.");
      return null;
    }
  };

  const validateForm = () => {
    const newErrors = {};
    // Validate all fields except 'id' and 'image' (image can be optional on update)
    for (const key in formData) {
      if (key !== "id" && key !== "image" && !formData[key]) {
        newErrors[key] = true;
      }
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Submit handler for both add and update
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      alert("Please fill all required fields.");
      return;
    }

    // First, handle the image upload
    const imageUrl = await handleImageUpload(formData.image);
    if (formData.image instanceof File && !imageUrl) {
      // If a new file was selected but upload failed, stop.
      return;
    }

    // Prepare the final data for the backend
    const propertyData = { ...formData, image: imageUrl };

    const url = isEditing ? `${API_URL}/${formData.id}` : API_URL;
    const method = isEditing ? "PUT" : "POST";

    try {
      const res = await fetch(url, {
        method: method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(propertyData),
      });

      if (res.ok) {
        fetchProperties();
        resetForm();
      } else {
        alert(`Failed to ${isEditing ? "update" : "add"} property.`);
      }
    } catch (error) {
      console.error(`Failed to ${isEditing ? "update" : "add"} property:`, error);
      alert(`An error occurred. Please try again.`);
    }
  };

  // Edit property (populate form)
  const handleEdit = (property) => {
    setFormData(property);
    setIsEditing(true);
    setShowForm(true);
    setImagePreview(property.image ? `${API_BASE_URL}${property.image}` : null);
  };

  // Delete property
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this property?")) return;
    try {
      const res = await fetch(`${API_URL}/${id}`, { method: "DELETE" });
      if (res.ok) {
        fetchProperties();
      } else {
        alert("Failed to delete property.");
      }
    } catch (error) {
      console.error("Failed to delete property:", error);
      alert("Failed to delete property.");
    }
  };

  const resetForm = () => {
    setFormData({
      id: null, title: "", price: "", address: "", city: "",
      beds: "", baths: "", sqft: "", garages: "", type: "", image: null,
    });
    setIsEditing(false);
    setShowForm(false);
    setErrors({});
    setImagePreview(null);
  };

  const handleLogout = () => {
  localStorage.removeItem("adminLoggedIn"); // clear login flag if you use it
  window.location.href = "/login"; // redirect to login page
  };


  return (
    <div className="admin-dashboard">
      <header className="admin-header">
        <div className="admin-header-content">
          <div className="logo">
            <img src="/src/assets/logo.png" alt="HouseZone" />
            <span className="logo-text">HouseZone Admin</span>
          </div>
          <button onClick={handleLogout} className="logout-btn">
            Logout
          </button>
        </div>
      </header>

      <div className="admin-section-header">
        <h2>Manage Properties</h2>
        <button className="add-new-btn" onClick={() => { setShowForm(true); setIsEditing(false); }}>
          + Add New Property
        </button>
      </div>

      {showForm && (
        <div className="form-overlay">
          <form className="admin-form" onSubmit={handleSubmit}>
            <h3>{isEditing ? "Edit Property" : "Add New Property"}</h3>

            <div className="form-row">
              <input type="text" name="title" placeholder="Property Name" value={formData.title} onChange={handleChange} className={errors.title ? 'error' : ''} />
              <input type="text" name="price" placeholder="Price" value={formData.price} onChange={handleChange} className={errors.price ? 'error' : ''} />
            </div>
            <div className="form-row">
              <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleChange} className={errors.address ? 'error' : ''} />
              <input type="text" name="city" placeholder="City" value={formData.city} onChange={handleChange} className={errors.city ? 'error' : ''} />
            </div>
            <div className="form-row">
              <input type="number" name="beds" placeholder="Bedrooms" value={formData.beds} onChange={handleChange} className={errors.beds ? 'error' : ''} />
              <input type="number" name="baths" placeholder="Bathrooms" value={formData.baths} onChange={handleChange} className={errors.baths ? 'error' : ''} />
            </div>
            <div className="form-row">
              <input type="text" name="sqft" placeholder="Area (sqft)" value={formData.sqft} onChange={handleChange} className={errors.sqft ? 'error' : ''} />
              <input type="number" name="garages" placeholder="Garages" value={formData.garages} onChange={handleChange} className={errors.garages ? 'error' : ''} />
            </div>
            <div className="form-row">
              <select name="type" value={formData.type} onChange={handleChange} className={errors.type ? 'error' : ''}>
                <option value="" disabled>-- Select Type --</option>
                <option value="For_sale">For sale</option>
                <option value="For_rent">For rent</option>
              </select>
              <input type="file" accept="image/*" onChange={handleImageChange} />
            </div>
            
            {imagePreview && (
              <div className="image-preview">
                <p>Image Preview:</p>
                <img src={imagePreview} alt="Selected preview" style={{ maxWidth: '100px', maxHeight: '100px' }} />
              </div>
            )}

            <div className="form-actions">
              <button type="submit" className={isEditing ? "update-btn" : "add-btn"}>
                {isEditing ? "Update" : "Add Property"}
              </button>
              <button type="button" className="cancel-btn" onClick={resetForm}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="admin-container">
        {properties.map((property) => (
          <div key={property.id} className="admin-card">
            <div className="admin-image">
              <img src={property.image ? `${API_BASE_URL}${property.image}` : "/placeholder.svg"} alt={property.title} />
              <div className="admin-type" data-type={property.type}>
                {property.type.replace("_", " ")}
              </div>
            </div>
            <div className="admin-info">
              <div className="admin-price">{property.price}</div>
              <h3 className="admin-title">{property.title}</h3>
              <p className="admin-address">{property.address}</p>
              <div className="admin-details">
                <span>{property.beds} Beds</span>
                <span>{property.baths} Baths</span>
                <span>{property.sqft.toLocaleString()} sqft</span>
                <span>{property.garages} Garage{property.garages !== 1 ? "s" : ""}</span>
              </div>
            </div>
            <div className="admin-actions">
              <button className="edit-btn" onClick={() => handleEdit(property)}>Edit</button>
              <button className="delete-btn" onClick={() => handleDelete(property.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;
