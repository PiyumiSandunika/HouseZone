import React, { useState, useEffect } from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [loggedIn, setLoggedIn] = useState(localStorage.getItem('loggedIn') === 'true');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    if (path === '/') setActiveLink('home');
    else if (path === '/property') setActiveLink('property');
    else if (path === '/about') setActiveLink('about');
    else if (path === '/contact') setActiveLink('contact');

    // Also update loggedIn state when route changes, in case login state changed
    setLoggedIn(localStorage.getItem('loggedIn') === 'true');
  }, [location]);

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleLogoutClick = () => {
    const confirmed = window.confirm('Do you want to logout?');
    if (confirmed) {
      localStorage.removeItem('loggedIn');
      setLoggedIn(false);
      navigate('/'); // or wherever you want to redirect after logout
    }
  };

  return (
    <header className="header">
      <div className="container">
        <div className="logo" onClick={() => navigate('/')}>
          <img src="/src/assets/logo.png" alt="HouseZone" />
          <span>HouseZone</span>
        </div>

        <nav className="nav">
          <Link to="/" className={activeLink === 'home' ? 'active' : ''}>Home</Link>
          <Link to="/property" className={activeLink === 'property' ? 'active' : ''}>Property</Link>
          <Link to="/about" className={activeLink === 'about' ? 'active' : ''}>About Us</Link>
          <Link to="/contact" className={activeLink === 'contact' ? 'active' : ''}>Contact Us</Link>
        </nav>

        <div className="header-actions">
          {loggedIn ? (
            <button className="header-logout-btn" onClick={handleLogoutClick}>
              Logout
            </button>
          ) : (
            <button className="header-login-btn" onClick={handleLoginClick}>
              Login
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
