import React from 'react';
import { Link } from 'react-router-dom';
import './WelcomePage.css';
import logo from '../assets/logo.png';
import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpg';

function WelcomePage() {
  return (
    <div className="welcome-page">
      <header className="fixed-header">
        <div className="company-logo">
          <img src={logo} alt="Company Logo" />
        </div>

        <nav className="navbar">
          <ul>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/software">Software</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/support">Support</Link></li>
            <li><Link to="/company">Company</Link></li>
          </ul>
        </nav>

        <div className="auth-buttons">
          <Link to="/signup" className="btn">Sign Up</Link>
          <Link to="/login" className="btn">Log In</Link>
        </div>
      </header>

      <main className="content">
        <header className="main-header">
          <h1>Welcome to Our Building Management System</h1>
          <p>General information about your building management system services.</p>
        </header>

        <div className="image-pane">
          <img src={image1} alt="Image 1" />
          <img src={image2} alt="Image 2" />
          <img src={image3} alt="Image 3" />
        </div>

        <footer className="bottom-section">
          <div className="bottom-content">
            <div className="column">
              <h3>Products</h3>
              <ul>
                <li><a href="#">Product Documentation</a></li>
                <li><a href="#">Software Downloads</a></li>
                <li><a href="#">Product Selector</a></li>
                <li><a href="#">Product Substitution and Replacement</a></li>
              </ul>
            </div>
            <div className="column">
              <h3>Support</h3>
              <ul>
                <li><a href="#">All Support & Contact</a></li>
                <li><a href="#">Find our Offices</a></li>
                <li><a href="#">Where to buy</a></li>
                <li><a href="#">Get a Quote</a></li>
              </ul>
            </div>
            <div className="column">
              <h3>Company</h3>
              <ul>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Company Profile</a></li>
                <li><a href="#">Newsroom</a></li>
                <li><a href="#">Investors</a></li>
              </ul>
            </div>
            <div className="column">
              <h3>Quick Links</h3>
              <ul>
                <li><a href="#">Job Search</a></li>
                <li><a href="#">Register Your Product</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Partners</a></li>
                <li><a href="#">Sustainability</a></li>
                <li><a href="#">Events</a></li>
                <li><a href="#">Insights</a></li>
              </ul>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default WelcomePage;
