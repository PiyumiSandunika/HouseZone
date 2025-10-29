import React, { useState, useEffect } from 'react';
import PropertyDetails from './PropertyDetails';
import './Places.css';

const API_URL = "http://localhost:8080/api/properties"; // Backend API
const API_BASE_URL = "http://localhost:8080"; // Base URL for constructing image paths

const Places = ( ) => {
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [properties, setProperties] = useState([]);

  // Fetch properties from backend on mount
  useEffect(() => {
    fetchProperties();
  }, []);

  const fetchProperties = async () => {
    try {
      const res = await fetch(API_URL);
      if (!res.ok) throw new Error("Failed to fetch properties");
      const data = await res.json();
      setProperties(data);
    } catch (error) {
      console.error(error);
      // Provide a more user-friendly error message
      alert("Could not connect to the server to fetch properties. Please make sure the backend is running.");
    }
  };

  const handlePropertyClick = (property) => {
    setSelectedProperty(property);
  };

  if (selectedProperty) {
    return (
      <PropertyDetails
        property={selectedProperty}
        onBack={() => setSelectedProperty(null)}
      />
    );
  }

  return (
    <section className="properties">
      <div className="Psection-Header">
        <h2>Find a home that suits your lifestyle</h2>
        <p className="psubtitle">
          Browse trusted listings across Sri Lanka and discover the perfect house
          for your comfort, convenience.
        </p>
      </div>

      <div className="Placee-container">
        {properties.map((place) => ( // Renamed to 'place' for clarity
          <div
            key={place.id}
            className="Placee-card"
            onClick={() => handlePropertyClick(place)}
          >
            <div className="Placee-image">
              {/* --- THIS IS THE FIX --- */}
              {/* Prepend the backend base URL to the image path */}
              <img 
                src={place.image ? `${API_BASE_URL}${place.image}` : '/placeholder.svg'} 
                alt={place.title} 
              />
              <div className="Placee-type" data-type={place.type}>
                {place.type.replace("_", " ")}
              </div>
            </div>
            <div className="Placee-info">
              <div className="Placee-price">{place.price}</div>
              <h3 className="Placee-title">{place.title}</h3>
              <p className="Placee-address">{place.address}</p>
              <div className="Placee-details">
                <span>{place.beds} Beds</span>
                <span>{place.baths} Baths</span>
                <span>{place.sqft.toLocaleString()} sqft</span>
                <span>
                  {place.garages} Garage{place.garages !== 1 ? 's' : ''}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Places;
