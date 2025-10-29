import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Header from './components/Home/Header';
import Footer from './components/Home/Footer';
import './Login.css';

export default function LoginPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [agreeToUpdates, setAgreeToUpdates] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

// const handleSubmit = async (e) => {
//   e.preventDefault();

//   try {
//     const response = await fetch("http://localhost:8080/api/users/login", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(formData)
//     });

//     const text = await response.text();

//     if (response.ok) {
//       alert("✅ " + text);
//       // Set login flag here
//       localStorage.setItem('loggedIn', 'true');
//       navigate('/');
//       // Optionally redirect to home or dashboard
//       // For example, using useNavigate:
//       // navigate('/');
//       window.location.href = '/';  // simple page reload + redirect
//     } else {
//       alert("❌ " + text);
//     }
//   } catch (error) {
//     alert("❌ Could not connect to server");
//   }
// };

    const handleSubmit = async (e) => {
  e.preventDefault();

  // Admin credentials
  const ADMIN_EMAIL = "admin@housezone.lk";
  const ADMIN_PASSWORD = "123";

  // Check admin login first
  if (formData.email === ADMIN_EMAIL && formData.password === ADMIN_PASSWORD) {
    localStorage.setItem("adminLoggedIn", "true");
    alert("✅ Welcome Admin!");
    navigate("/admin/dashboard");
    return; // Stop here (skip backend call)
  }

  // If not admin → do normal user login
  try {
    const response = await fetch("http://localhost:8080/api/users/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData)
    });

    const text = await response.text();

    if (response.ok) {
      alert("✅ " + text);
      localStorage.setItem("loggedIn", "true");
      navigate("/");
    } else {
      alert("❌ " + text);
    }
  } catch (error) {
    alert("❌ Could not connect to server");
  }
};


  return (
    <div className="login-container">
      <Header />
      
      <div className="login-content">
        <div className="login-background"></div>
        
        <div className="login-form-container">
          <div className="login-form-card">
            <h2>Login to your account</h2>
            
            <form onSubmit={handleSubmit}>
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
              
              <button type="submit" className="login-submit-btn">
                Login
              </button>
            </form>
            
            <div className="login-footer">
              <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
              <p className="terms">
                By logging in you agree to our <Link to="/terms">Terms of Service</Link> and <Link to="/privacy">Privacy Policy</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}