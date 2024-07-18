// src/components/WelcomePage.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/WelcomePage.css';
import logo from '../assets/logo.png';
import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpg';

const WelcomePage = () => {
  return (
    <div className="welcome-container">
      <header className="navbar">
        <img src={logo} alt="Company Logo" className="logo" />
        <nav className="nav-links">
          <a href="#products">Products</a>
          <a href="#software">Software</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
          <a href="#support">Support</a>
          <a href="#company">Company</a>
        </nav>
      </header>
      
      <div className="main-content">
        <h1>Welcome to Our Building Management System</h1>
        <div className="button-container">
          <Link to="/initial-signup" className="btn">Sign Up</Link>
          <Link to="/login" className="btn">Log In</Link>
        </div>
        
        <div className="image-section">
          <img src={image1} alt="Building Management 1" className="feature-image" />
          <img src={image2} alt="Building Management 2" className="feature-image" />
          <img src={image3} alt="Building Management 3" className="feature-image" />
        </div>
        
        <div className="company-info">
          <h2>About Our Company</h2>
          <p>We provide top-notch building management solutions that help you monitor and control various aspects of your buildings efficiently. Our products and services are designed to meet the highest standards of quality and performance.</p>
        </div>
        
        <div className="bottom-section">
          <div className="section">
            <h3>Products</h3>
            <ul>
              <li>Product Documentation</li>
              <li>Software Downloads</li>
              <li>Product Selector</li>
              <li>Product Substitution and Replacement</li>
            </ul>
          </div>
          <div className="section">
            <h3>Support</h3>
            <ul>
              <li>All Support & Contact</li>
              <li>Find our Offices</li>
              <li>Where to buy</li>
              <li>Get a Quote</li>
            </ul>
          </div>
          <div className="section">
            <h3>Company</h3>
            <ul>
              <li>Careers</li>
              <li>Company Profile</li>
              <li>Newsroom</li>
              <li>Investors</li>
            </ul>
          </div>
          <div className="section">
            <h3>Quick Links</h3>
            <ul>
              <li>Job Search</li>
              <li>Register Your Product</li>
              <li>Blog</li>
              <li>Partners</li>
              <li>Sustainability</li>
              <li>Events</li>
              <li>Insights</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
