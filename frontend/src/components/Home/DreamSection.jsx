import React from 'react';
import './DreamSection.css';

const DreamSection = () => {
  return (
    <section className="dream-section">
      <div className="container">
        <div className="dream-content">
          <div className="dream-image">
            <img src="./src/assets/HappyFamily.jpg" alt="Happy Family" />
          </div>
          <div className="dream-text">
            <h2>Making your home journey</h2>
            <h3>easier, step by step.</h3>
            <p>We're here to help you move forward with confidence.</p>
            <p>From first visits to final decisions,</p>
            <p>HouseZone supports you every step of the way.</p>
            <button className="cta-button">Learn more</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DreamSection;
