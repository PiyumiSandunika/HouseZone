import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from './components/Home/Header';
import Footer from './components/Home/Footer';
import './Signup.css';

export default function SignupPage() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });
  const [agreeToUpdates, setAgreeToUpdates] = useState(false);
  const [message, setMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch("http://localhost:8080/api/users/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setMessage("✅ Account created successfully!");
        setFormData({ username: '', email: '', password: '' });
      } else {
        const errorText = await response.text();
        setMessage("❌ Error: " + errorText);
      }
    } catch (error) {
      setMessage("❌ Could not connect to server");
    }
  };

  return (
    <div className="signin-container">
      <Header />
      
      <div className="signin-content">
        <div className="signin-background"></div>
        
        <div className="signin-form-container">
          <div className="signin-form-card">
            <h2>Create your account</h2>
            
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  value={formData.username}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div className="form-checkbox">
                <input
                  type="checkbox"
                  id="updates"
                  checked={agreeToUpdates}
                  onChange={(e) => setAgreeToUpdates(e.target.checked)}
                />
                <label htmlFor="updates">
                  I want to receive updates about offers, news, city launches, and exclusive deals
                </label>
              </div>
              
              <button type="submit" className="signin-submit-btn">
                Create account
              </button>
            </form>

            {message && <p className="signup-message">{message}</p>}
            
            <div className="signin-footer">
              <p>Already have an account? <Link to="/login">Log in</Link></p>
              <p className="signin-terms">
                By creating an account you agree to our <Link to="/terms">Terms of Service</Link> and <Link to="/privacy">Privacy Policy</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
