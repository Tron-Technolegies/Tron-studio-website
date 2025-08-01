import React, { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="navbar-logo"> <a href="/">
        <img src="/logo.png" alt="Tron Studio" /></a>
      </div>
      
      {/* Desktop Navigation */}
      <nav className="navbar-nav-links desktop-nav">
      <a href="#how-it-works">How It Works</a>
      <a href="#portfolio">Portfolio</a>
      <a href="#team">Team</a>
      <a href="#who-we-are">About</a>  
      <a href="#blog">Blog</a>   
      </nav>

      {/* Desktop Get Started Button */}
      <button className="navbar-get-started desktop-button">Get Started</button>

      {/* Mobile Hamburger Menu */}
      <div className="mobile-nav">
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
            <a href="/">
            <img src="/logo.png" alt="Tron Studio" className="mobile-logo" /></a>
            <button className="close-menu" onClick={closeMenu}>×</button>
          </div>
          
        <div className="mobile-nav-content">
            <a href="#how-it-works" onClick={closeMenu}>How It Works</a>
            <a href="#portfolio" onClick={closeMenu}>Portfolio</a>
            <a href="#team" onClick={closeMenu}>Team</a>
            <a href="#who-we-are" onClick={closeMenu}>About</a>
            <a href="#blog" onClick={closeMenu}>Blog</a>

            <button className="navbar-get-started mobile-button" onClick={closeMenu}>
              Get Started
            </button>
        </div>

        </nav>
      </div>
    </header>
  );
}

export default Navbar;