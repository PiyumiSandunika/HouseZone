import React from 'react';
import "./SuccessSection.css"

const SuccessSection = () => {
  return (
    <section className="success-section">
      <div className="success-container">
        <div className="success-header">
          <h2 className="success-title">Our client's success is our success.</h2>
          <p className="success-subtitle">
            When you find the right house, we know we've done our job right. Your success is what motivates us.
          </p>
        </div>

        <div className="success-cards">
          <div className="success-card">
            <div className="card-icon">🏠︎</div>
            <h3 className="card-title">Buy a house</h3>
            <p className="card-description">
              Find your dream home from our trusted listings, with expert support to guide you through every step of
              your purchase.
            </p>
            <button className="card-button">Find property</button>
          </div>

          <div className="success-card">
            <div className="card-icon">🏠︎</div>
            <h3 className="card-title">Rent a house</h3>
            <p className="card-description">
              Explore affordable, comfortable rental houses in great locations, with flexible options that suit your lifestyle and budget.
            </p>
            <button className="card-button primary">Find a rent</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SuccessSection
