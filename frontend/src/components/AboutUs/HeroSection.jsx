import React from 'react';
import "./HeroSection.css"

const HeroSection = () => {
  const locations = [
    { name: "Colombo", count: 28 },
    { name: "Kandy", count: 25 },
    { name: "Dehiwala", count: 8 },
    { name: "Negombo", count: 18 },
    { name: "Wattala", count: 18 },
  ]

  return (
    <section className="Ahero">
      <div className="Ahero-background">
        <div className="Ahero-content">
          <h1 className="Ahero-title">Find Your Dream House</h1>
          <p className="Ahero-subtitle">Handpicked houses that match your lifestyle, location, and budget</p>
        </div>
      </div>
      <div className="locations-container">
        <div className="locations-grid">
          {locations.map((location, index) => (
            <div key={index} className="location-card">
              <div className="location-icon">♡⌂</div>
              <div className="location-count">{location.count}</div>
              <div className="location-name">{location.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HeroSection
