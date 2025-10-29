import React, { useState } from "react";
import './Payment.css';

const Payment = ({ price, onPaymentComplete }) => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Payment confirmed!");
    if (onPaymentComplete) onPaymentComplete();
  };

  return (
    <div className="payment-section">
      <h2>Payment Confirmation</h2>
      <div className="payment-form">
        <div className="total-price">Total Price: {property.price}</div>
        <form onSubmit={handleSubmit}>
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
            placeholder="Your email"
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
          <button type="submit" className="pay-now-btn">PAY NOW</button>
        </form>
      </div>
    </div>
  );
};

export default Payment;