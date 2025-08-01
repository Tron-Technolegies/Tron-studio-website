import React from 'react';
import './KeralaHero.css';

export default function KeralaHero() {
  return (
    <div className="keralahero-section">
      {/* Title */}
      <h1 className="keralahero-section-title">
        Transform Your Brand with
        Kerala’s Leading Marketing
        Video Agency
      </h1>

      {/* Hero Image with Exact Overlay Design */}
      <div className="keralahero-image-container">
        <img 
          src="/Kerala-Hero-img.png" 
          alt="Creative video production in Kerala" 
          className="keralahero-section-img"
        />
        
        {/* Left Side Text Box */}
        <div className="kerala-hero-left-textbox">
          <p className="kerala-hero-description-text">
           At Tron Studio, we don’t just make videos—we craft visualstories that connect, convert, and leave a lasting impression.
            As a full-service marketing video agency based in <span className="kerala-hero-highlight">Kerala</span>, we help
            brands grow using high-quality, strategy-driven content.
          </p>
        </div>
      </div>

      {/* Right Side Content Below Image
      <div className="kerala-hero-right-section">
        <div className="kerala-hero-features-text">
          <p>Trusted by brands across Kerala</p>
          <p>Strategy + Production + Delivery</p>
          <p>From single videos to full campaigns</p>
        </div>
      </div> */}

      {/* Center Bottom CTA Button */}
      <div className="kerala-hero-cta-section">
        <button className="kerala-hero-proposal-button">
          Get a proposal
          <span className="kerala-hero-button-arrow">↗</span>
        </button>
      </div>
    </div>
  );
}