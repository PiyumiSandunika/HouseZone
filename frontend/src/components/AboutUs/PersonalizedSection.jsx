import React from 'react';
import "./PersonalizedSection.css"

const PersonalizedSection = () => {
  return (
    <section className="personalized-section">
      <div className="personalized-container">
        <div className="personalized-content">
          <div className="content-text">
            <h2 className="personalized-title">Personalized home solutions just for you</h2>
            <p className="personalized-description">
              We offer trusted real estate solutions personalized to your needs, helping you find the perfect house in
              the right location, with expert guidance, transparent service, and ongoing support from search to final
              decision — making your journey smooth, secure, and successful.
            </p>
            <button className="learn-more-btn">Learn more</button>
          </div>
          <div className="content-image">
            <img src="./src/assets/personal_sec.webp" alt="Professional real estate agent" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default PersonalizedSection
