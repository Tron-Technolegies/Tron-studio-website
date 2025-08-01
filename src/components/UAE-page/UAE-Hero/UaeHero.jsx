// UaeHero.jsx
import React from 'react';
import './UaeHero.css';

export default function UaeHero() {
  return (
    <div className="uaehero-section">
      {/* Title */}
      <h1 className="uaehero-section-title">
        Your Creative Video Production Company in Dubai
      </h1>

      {/* Hero Image with Exact Overlay Design */}
      <div className="uaehero-image-container">
        <img 
          src="/Uae-Hero-img.png" 
          alt="Creative video production in Dubai" 
          className="uaehero-section-img"
        />
        
        {/* Left Side Text Box */}
        <div className="dubai-hero-left-textbox">
          <p className="dubai-hero-description-text">
            At Tron Studio, we turn ideas into scroll-stopping visuals. 
            Whether it's a product launch, brand story, or ad campaign, 
            our team in <span className="dubai-hero-highlight">Dubai</span> delivers world-class results, fast.
          </p>
        </div>
      </div>

      {/* Right Side Content Below Image */}
      <div className="dubai-hero-right-section">
        <div className="dubai-hero-features-text">
          <p>Trusted by brands across the UAE</p>
          <p>Strategy + Production + Delivery</p>
          <p>From single videos to full campaigns</p>
        </div>
      </div>

      {/* Center Bottom CTA Button */}
      <div className="dubai-hero-cta-section">
        <button className="dubai-hero-proposal-button">
          Get a proposal
          <span className="dubai-hero-button-arrow">↗</span>
        </button>
      </div>
    </div>
  );
}