import React from 'react';
import './CitySection.css';

const CitySection = () => {
  const cities = [
    {
      name: 'Colombo',
      image: './src/assets/colombo.webp',
      properties: 28,
    },
    {
      name: 'Dehiwala',
      image: './src/assets/dehiwala.jpg',
      properties: 8,
    },
    {
      name: 'Kandy',
      image: './src/assets/kandy.webp',
      properties: 25,
    },
    {
      name: 'Negombo',
      image: './src/assets/negombo.webp',
      properties: 18,
    },
    {
      name: 'Wattala',
      image: './src/assets/wattala.webp',
      properties: 18,
    },
  ];

  return (
    <section className="city-section">
      <div className="section-header">
        <h2>What city will you live in?</h2>
        <p className="subtitle">Start your journey in a city that feels like home.</p>
        <p className="description">Explore beautiful places and make your dream move with HouseZone.</p>
      </div>

      <div className="city-grid">
        {cities.map((city, index) => (
          <div className="city-card" key={index}>
            <img src={city.image} alt={city.name} className="city-image" />
            <div className="city-info">
              <h3>{city.name}</h3>
              <p>{city.properties} properties</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CitySection;
