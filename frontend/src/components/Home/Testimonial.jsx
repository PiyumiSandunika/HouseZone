import React from 'react';
import './Testimonial.css';

const Testimonial = () => {
  return (
    <section className="testimonial">
      <div className="container">
        <div className="testimonial-content">
          <div className="testimonial-text">
            <h2>What our Clients say about us</h2>
            <blockquote>
              "HouseZone made the home buying process easy and stress-free with excellent support, clear communication, and professional service from start to finish."
            </blockquote>
            <cite>- Piyumi Sandunika</cite>
          </div>
          <div className="testimonial-image">
            <img src="./src/assets/Piyumi_Sandunika.jpg" alt="Angela Cavendish" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
