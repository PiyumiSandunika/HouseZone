import React, { useState } from 'react';
import Header from './components/Home/Header';
import Footer from './components/Home/Footer';
import './ContactUs.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Handle form submission here
    alert("Message sent successfully!")
    setFormData({ name: "", email: "", phone: "", message: "" })
  }

  return (
    <div className="contact-page">
      <Header />

      <main className="contact-main">
        <div className="contact-container">
          <div className="contact-form-section">
            <div className="form-card">
              <h2>Get in touch</h2>
              <p className="form-subtitle">
                Have questions or need help?
                <br />
                Our team will get back to you soon.
              </p>

              <form onSubmit={handleSubmit} className="contact-form">
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Your mail"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />

                <input
                  type="tel"
                  name="phone"
                  placeholder="Your phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                />

                <textarea
                  name="message"
                  placeholder="Your message"
                  rows="4"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                ></textarea>

                <button type="submit" className="submit-btn">
                  Send message
                </button>
              </form>
            </div>
          </div>

          <div className="contact-info-section">
            <div className="contact-info">
              <h2>Feel free to contact us</h2>
              <p className="info-subtitle">Leo morbi faucibus mattis pharetra</p>

              <div className="contact-details">
                <div className="contact-item">
                  <div className="contact-icon">𖤣 </div>
                  <div>
                    <strong>No. 89/11, Tanglewood Avenue</strong>
                    <br />
                    Nugegoda,
                    <br />
                    Colombo
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">☎</div>
                  <div>(045) 678-6788</div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">☎</div>
                  <div>(045) 678-6789</div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">✉</div>
                  <div>housezone.lk@gmail.com</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default ContactUs
