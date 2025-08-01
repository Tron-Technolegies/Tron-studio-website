import React from 'react';
import { Link } from 'react-router-dom'; 
import './Footer.css'; 

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-top">
        {/* Logo */}
        <div className="footer-logo">
          <a href="/">
          <img src="/logo.png" alt="Tron Studio" /></a>
        </div>

        {/* Location buttons */}
        <div className="footer-locations">
          <p>Location we serve</p>
          <Link to="/kerala" className="location-btn">Kerala ↗</Link>
          <Link to="/uae" className="location-btn">UAE ↗</Link>
        </div>

        {/* Email form */}
            <form className="footer-form">
            <div>
                <input type="email" placeholder="Enter Your Email" />
            </div>
            <div>
                <button type="submit">Submit</button>
            </div>
            </form>

      </div>

      <div className="footer-links">
        {/* Social Media */}
        <div>
          <p className="footer-category">• Social Media</p>
          <ul>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">LinkedIn</a></li>
            <li><a href="#">Facebook</a></li>
          </ul>
        </div>

        {/* All Services */}
        <div>
          <p className="footer-category">• All Services</p>
          <ul>
            <li>Creative commercial</li>
            <li>Brand videos</li>
            <li>Model Photography</li>
            <li>Product videos</li>
            <li>Marketing videos</li>
            <li>Testimonial videos</li>
          </ul>
        </div>

        {/* Pages */}
        <div>
          <ul className="footer-pages">
            <li>Team</li>
            <li>Portfolio</li>
            <li>Studios</li>
            <li>Blog</li>
          </ul>
        </div>

        {/* Address */}
        <div>
          <p className="footer-category">• Address</p>
          <ul className="footer-address">
            <li>Plaza 30, Unit 2B-SF - Delma St - Abu Dhabi</li>
            <li>rizwan@trondigital.ae</li>
            <li>+971 055 706 9222</li>
            <li>+971 56 814 5866</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>©2025 tron studio All rights reserved</p>
        <div className="footer-right-links">
          <a href="#">Terms Of Use</a>
          <a href="#">Back To Top</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
