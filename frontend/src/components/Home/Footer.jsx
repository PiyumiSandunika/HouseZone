import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <img src="/src/assets/logo.png" alt="HouseZone" />
            <span>  HouseZone</span>
          </div>

          <div className="footer-section">
            <h3>Find Us</h3>
            <ul className="footer-contact">
              <li></li>
              <li>No. 89/11, Tanglewood Avenue</li>
              <li>Nugegoda,</li>
              <li>Colombo</li>  
              <li>045-5555678</li>
              <li>
                <a href="mailto:housezone.lk@gmail.com">housezone.lk@gmail.com</a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Links</h3>
            <ul className="footer-links">
              <li></li>
              <li><a href="#home">Home</a></li>
              <li><a href="#property">Property</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Newsletter</h3>
            <p>Subscribe to our newsletter</p>
            <div className="newsletter-form">
              <input type="email" placeholder="Your email" />
              <button className="subscribe-btn">Subscribe</button>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; Copyright 2025 HouseZone</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;