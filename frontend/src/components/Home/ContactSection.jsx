import React from 'react';
import './ContactSection.css';

const ContactSection = () => {
  return (
    <section className="Contact-Section">
      <div className="container">
        <div className="contact-content">
          <div className="contact-form">
            <h2>Get in touch</h2>
            <p className="form-description">Have questions or need help?</p>
            <p className="form-description">Our team will get back to you soon.</p>
            <form>
              <div className="form-group">
                <input type="text" placeholder="Your name" required />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Your mail" required />
              </div>
              <div className="form-group">
                <input type="tel" placeholder="Your phone" required />
              </div>
              <div className="form-group">
                <textarea placeholder="Your message" rows="4" required></textarea>
              </div>
              <button type="submit" className="submit-btn">Send message</button>
            </form>
          </div>
          <div className="contact-text">
            <h3>Putting a plan to action,</h3>
            <h3>to assure your satisfaction!</h3>
            <p>Whether you are trying to help, we're here to guide</p>
            <p>you every step of the way.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;