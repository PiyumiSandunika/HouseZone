import React, { useState } from 'react';
import './Hero.css';

function Hero() {
  const [showLocationDropdown, setShowLocationDropdown] = useState(false);
  const [showAvailabilityDropdown, setShowAvailabilityDropdown] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState('Location');
  const [selectedAvailability, setSelectedAvailability] = useState('Availability');

  const locations = ['Colombo', 'Kandy', 'Negombo', 'Wattala', 'Dehiwala'];
  const availabilities = ['For Rent', 'For Buy'];

  const handleLocationSelect = (location) => {
    setSelectedLocation(location);
    setShowLocationDropdown(false);
  };

  const handleAvailabilitySelect = (availability) => {
    setSelectedAvailability(availability);
    setShowAvailabilityDropdown(false);
  };

  return (
    <div className="hero">
      <div className="hero-content">
        <h1>Find a home that suits your lifestyle</h1>
        <p>Browse trusted listings across Sri Lanka and discover the perfect house for your comfort, convenience.</p>
      </div>

      <div className="search-container">
        <div className="search-box">
          {/* Location Dropdown */}
          <div className={`custom-dropdown ${showLocationDropdown ? 'active' : ''}`}>
            <button 
              className="dropdown-toggle"
              onClick={() => {
                setShowLocationDropdown(!showLocationDropdown);
                setShowAvailabilityDropdown(false);
              }}
            >
              {selectedLocation}
              <span className="dropdown-arrow">▼</span>
            </button>
            {showLocationDropdown && (
              <div className="dropdown-menu location-menu">
                {locations.map((location, index) => (
                  <div 
                    key={index}
                    className="dropdown-item"
                    onClick={() => handleLocationSelect(location)}
                  >
                    {location}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Availability Dropdown */}
          <div className={`custom-dropdown ${showAvailabilityDropdown ? 'active' : ''}`}>
            <button 
              className="dropdown-toggle"
              onClick={() => {
                setShowAvailabilityDropdown(!showAvailabilityDropdown);
                setShowLocationDropdown(false);
              }}
            >
              {selectedAvailability}
              <span className="dropdown-arrow">▼</span>
            </button>
            {showAvailabilityDropdown && (
              <div className="dropdown-menu availability-menu">
                {availabilities.map((availability, index) => (
                  <div 
                    key={index}
                    className="dropdown-item"
                    onClick={() => handleAvailabilitySelect(availability)}
                  >
                    {availability}
                  </div>
                ))}
              </div>
            )}
          </div>

          <button className="search-button">SEARCH</button>
        </div>
      </div>
    </div>
  );
}

export default Hero;