import React, { useState } from "react";
import "./NavbarinPage.css";

function NavbarinPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="navbarinpage">
      <div className="navbarinpage-logo">
        <a href="/">
        <img src="/logo.png" alt="Tron Studio" /></a>
      </div>
      
      {/* Desktop Navigation */}
      <nav className="navbarinpage-nav-links">
        <a href="#">Home</a>
        <a href="#">Services</a>
        <a href="#">Latest Work</a>
        <a href="#">Testimonial</a>
      </nav>

      {/* Desktop Get Started Button */}
      <button className="navbar-contact-us desktop-button">Contact Us</button>

      {/* Mobile Hamburger Menu */}
      <div className="mobile-navbarinpage">
        <button 
          className={`hamburger-menu ${isMenuOpen ? 'open' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
        
        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="mobile-menu-overlay" onClick={closeMenu}></div>
        )}
        
        <nav className={`mobile-nav-links ${isMenuOpen ? 'open' : ''}`}>
          <div className="mobile-nav-header">
            <img src="/logo.png" alt="Tron Studio" className="mobile-logo" />
            <button className="close-menu" onClick={closeMenu}>×</button>
          </div>
          
          <div className="mobile-navbarinpage-content">
            <a href="#" onClick={closeMenu}>Home</a>
            <a href="#" onClick={closeMenu}>Services</a>
            <a href="#" onClick={closeMenu}>Latest work</a>
            <a href="#" onClick={closeMenu}>Testimonial</a>
            
            <button className="navbar-contact-us mobile-button" onClick={closeMenu}>
              Contact Us
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default NavbarinPage;