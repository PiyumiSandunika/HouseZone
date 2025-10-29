import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import "./PropertyDetails.css";

// Define the base URL for your backend API
const API_BASE_URL = "http://localhost:8080";

const PropertyDetails = ({ property, onBack }) => {
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  // Dynamic images (first is property image)
  const propertyImages = [
    property.image ? `${API_BASE_URL}${property.image}` : "/placeholder.svg",
    // "/interior-living-room.png",
    // "/interior-kitchen.png",
    // "/interior-bedroom.png",
    // "/interior-bathroom.png",
  ];

  // Nearby places (you can customize per property later if needed)
  const nearbyPlaces = {
    education: [
      { name: "Allen Academy", distance: "0.09 km" },
      { name: "St. Joseph School", distance: "0.03 km" },
      { name: "George Washington School", distance: "0.06 km" },
    ],
    health: [
      { name: "Negombo General Hospital", distance: "1.2 km" },
      { name: "Allen Medical Center", distance: "0.1 km" },
      { name: "St. Joseph Clinic", distance: "0.3 km" },
    ],
    food: [
      { name: "The Lagoon Seafood Restaurant", distance: "0.5 km" },
      { name: "Family Food Hub", distance: "0.2 km" },
      { name: "Negombo Bakery & Cafe", distance: "0.3 km" },
    ],
    culture: [
      { name: "Negombo Beach Park", distance: "1.0 km" },
      { name: "Dutch Fort", distance: "1.5 km" },
      { name: "St. Mary's Church", distance: "0.8 km" },
    ],
  };

  // Featured listings (static for now)
  const featuredListings = [
    {
      id: 1,
      name: "Anderson House",
      location: "Dehiwala",
      price: "LKR 72,000,000",
      status: "For sale",
      image: "./src/assets/id1.jpg",
    },
    {
      id: 2,
      name: "Joseph Street House",
      location: "Negombo",
      price: "LKR 60,000,000",
      status: "For sale",
      image: "./src/assets/id2.jpg",
    },
    {
      id: 3,
      name: "Station Road House",
      location: "Wattala",
      price: "LKR 90,000 / month",
      status: "For rent",
      image: "./src/assets/id3.webp",
    },
    {
      id: 4,
      name: "Independence House",
      location: "Colombo",
      price: "LKR 62,000,000",
      status: "For sale",
      image: "./src/assets/id4.jpg",
    },
  ];

  // const handleFormSubmit = (e) => {
  //   e.preventDefault();
  //   alert("Payment confirmation submitted!");
  // };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

    const handleFormSubmit = async (e) => {
  e.preventDefault();

  const isLoggedIn = localStorage.getItem('loggedIn') === 'true';
  if (!isLoggedIn) {
    alert('You must be logged in to make a payment.');
    navigate('/login');
    return;
  }

    try {
      const response = await fetch(`${API_BASE_URL}/api/customers/pay`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: formData.name,
          email: formData.email,
          phoneNumber: formData.phone,
          // Ensure price is parsed correctly as a number
          price: parseFloat(property.price.replace(/[^0-9.-]+/g, ""))
        })
      });

    const text = await response.text();
    if (response.ok) {
      alert('✅ ' + text);
      setFormData({ name: '', email: '', phone: '' });
    } else {
      alert('❌ ' + text);
    }
  } catch (error) {
    alert('❌ Could not connect to server');
  }
};

  return (
    <div className="property-details-page">
     

      <button className="back-btn" onClick={onBack}>← Back</button>

      {/* Property Header */}
      <div className="property-header">
        <div className="property-title-section">
          <span className={`status-badge ${property.type === "For sale" ? "for-sale" : "for-rent"}`}>
            {property.type}
          </span>
          <h1 className="property-title">{property.title}</h1>
          <p className="property-address">{property.address}</p>
        </div>
        <div className="property-price-section">
          <div className="price">{property.price}</div>
          <div className="price-per-sqft">
            LKR {(parseInt(property.price.replace(/\D/g, "")) / property.sqft).toLocaleString()}/sq.ft
          </div>
        </div>
      </div>

      <div className="property-content">
        <div className="main-content">
          {/* Image Gallery */}
            <div className="main-image">
              {/* --- CHANGE 2: No change needed here as propertyImages is already corrected --- */}
              <img src={propertyImages[currentImageIndex]} alt="Property" />
            </div>
            <div className="image-thumbnails">
              {propertyImages.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Property ${index + 1}`}
                  className={currentImageIndex === index ? "active" : ""}
                  onClick={() => setCurrentImageIndex(index)}
                />
              ))}
            </div>

          {/* Description */}
          <div className="description-section">
            <h2>Description</h2>
            <p>Experience elegant living in the heart of city with this beautifully designed two-story house on {property.title}. Featuring {property.beds} spacious bedrooms, {property.baths} modern bathrooms, and a {property.sqft} layout, this home is perfect for families seeking comfort and convenience. The home includes parking for vehicles, Wi-Fi, and Cable TV, ensuring you stay connected and entertained.</p>
           
            <p>This house boasts a clean, modern aesthetic with high-quality finishes, natural lighting, and a peaceful garden setting.</p> 
        
            <button className="book-now-btn">Book Now</button>
          </div>

          {/* Property Details */}
          <div className="property-details-section">
            <h2>Property details</h2>
            <div className="details-grid">
              <div className="detail-item"><span>📐</span>Area: {property.sqft} sq.ft</div>
              <div className="detail-item"><span>🛏️</span>Bedrooms: {property.beds}</div>
              <div className="detail-item"><span>🛁</span>Bathrooms: {property.baths}</div>
              <div className="detail-item"><span>🅿</span>Garage(s): {property.garages}</div>
              <div className="detail-item"><span>ᯤ</span>Wi-Fi: Yes</div>
              <div className="detail-item"><span>⎚</span>Cable Tv: Yes</div>
            </div>
          </div>

          {/* What's Nearby */}
          <div className="nearby-section">
            <h2>What's nearby</h2>
            {Object.entries(nearbyPlaces).map(([category, places]) => (
              <div className="nearby-category" key={category}>
                <h3>{category}</h3>
                <div className="nearby-list">
                  {places.map((place, idx) => (
                    <div key={idx} className="nearby-item">
                      <span>{place.name}</span>
                      <span>{place.distance}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Payment Confirmation */}
          <div className="payment-section">
            <h2>Payment Confirmation</h2>
            <div className="payment-form">
              <div className="total-price">Total Price: {property.price}</div>
              <form onSubmit={handleFormSubmit}>
                <input type="text" name="name" placeholder="Username" value={formData.name} onChange={handleInputChange} required />
                <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleInputChange} required />
                <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleInputChange} required />
                <button type="submit" className="pay-now-btn">PAY NOW</button>
              </form>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="sidebar">
          {/* Map */}
          <div className="map-section">
            <div className="map-placeholder">
              <div className="map-marker">📍</div>
              <p>Interactive Map</p>
            </div>
          </div>

          {/* Featured Listings */}
          <div className="featured-listings">
            <h3>Featured listings</h3>
            {featuredListings.map((listing) => (
              <div key={listing.id} className="featured-item">
                <img src={listing.image || "/placeholder.svg"} alt={listing.name} />
                <div className="featured-info">
                  <h4>{listing.name}</h4>
                  <p>{listing.location}</p>
                  <div className="featured-price">{listing.price}</div>
                  <span className={`featured-status ${listing.status === "For sale" ? "for-sale" : "for-rent"}`}>
                    {listing.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

     
    </div>
  );
};

export default PropertyDetails;