// src/components/WelcomePage.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/WelcomePage.css';  // Ensure this matches the exact file name
import logo from '../assets/logo.png';
import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpg';

const WelcomePage = () => {
  return (
    <div className="welcome-page">
      <header className="header">
        <img src={logo} alt="Company Logo" className="logo" />
        <nav className="navbar">
          <ul>
            <li><a href="#products">Products</a></li>
            <li><a href="#software">Software</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#support">Support</a></li>
            <li><a href="#company">Company</a></li>
          </ul>
        </nav>
      </header>
      <main className="main-content">
        <h1>Welcome to Our Building Management System</h1>
        <div className="button-container">
          <Link to="/signup" className="btn">Sign Up</Link>
          <Link to="/login" className="btn">Log In</Link>
        </div>
        <div className="image-pane">
          <img src={image1} alt="Building Management" />
          <img src={image2} alt="Building Management" />
          <img src={image3} alt="Building Management" />
        </div>
        <div className="bottom-section">
          <div className="column">
            <h2>Products</h2>
            <ul>
              <li>Product Documentation</li>
              <li>Software Downloads</li>
              <li>Product Selector</li>
              <li>Product Substitution and Replacement</li>
            </ul>
          </div>
          <div className="column">
            <h2>Support</h2>
            <ul>
              <li>All Support & Contact</li>
              <li>Find our Offices</li>
              <li>Where to buy</li>
              <li>Get a Quote</li>
            </ul>
          </div>
          <div className="column">
            <h2>Company</h2>
            <ul>
              <li>Careers</li>
              <li>Company Profile</li>
              <li>Newsroom</li>
              <li>Investors</li>
            </ul>
          </div>
          <div className="column">
            <h2>Quick Links</h2>
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
      </main>
    </div>
  );
};

export default WelcomePage;
