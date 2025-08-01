import React, { useState, useEffect } from "react";
import "./NavbarinPage.css";

function NavbarinPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <header className="navbarinpage">
      <div className="navbarinpage-logo">
        <a href="/" aria-label="Tron Studio Home">
          <img src="/logo.png" alt="Tron Studio" />
        </a>
      </div>

      {/* Desktop Navigation */}
      <nav className="navbarinpage-nav-links" aria-label="Main navigation">
        <a href="/">Home</a>
        <a href="#services">Services</a>
        <a href="#recent-projects">Latest Work</a>
        <a href="#testimonials">Testimonial</a>
      </nav>

      {/* Desktop Get Started Button */}
      <button className="navbar-contact-us desktop-button">Contact Us</button>

      {/* Mobile Hamburger Menu */}
      <div className="mobile-navbarinpage">
        <button
          className={`hamburger-menu ${isMenuOpen ? "open" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle mobile menu"
          aria-expanded={isMenuOpen}
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="mobile-menu-overlay" onClick={closeMenu} aria-hidden="true"></div>
        )}

        <nav
          className={`mobile-nav-links ${isMenuOpen ? "open" : ""}`}
          aria-label="Mobile navigation"
        >
          <div className="mobile-nav-header">
            <img src="/logo.png" alt="Tron Studio" className="mobile-logo" />
            <button className="close-menu" onClick={closeMenu} aria-label="Close mobile menu">
              ×
            </button>
          </div>

          <div className="mobile-navbarinpage-content">
            <a href="#" onClick={closeMenu}>
              Home
            </a>
            <a href="#" onClick={closeMenu}>
              Services
            </a>
            <a href="#" onClick={closeMenu}>
              Latest Work
            </a>
            <a href="#" onClick={closeMenu}>
              Testimonial
            </a>

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
