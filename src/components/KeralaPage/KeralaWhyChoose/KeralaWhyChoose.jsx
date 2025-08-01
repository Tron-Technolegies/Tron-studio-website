// KeralaWhyChoose.jsx
import React from 'react';
import './KeralaWhyChoose.css';

export default function KeralaWhyChoose() {
  return (
    <section className="kerala-why-choose-section">
      <div className="kerala-why-choose-container">
        {/* Left Content */}
        <div className="kerala-why-choose-left">
          <h2 className="kerala-why-choose-title">
            WHY CHOOSE<br />
            TRON STUDIO?
          </h2>
          
          <p className="kerala-why-choose-description">
            At Tron Studio, we don't just make videos—we craft visual 
            experiences that connect, engage, and deliver real results. 
            As a full-service marketing video agency based in Kerala, we help 
            brands grow using high-quality, strategic-driven content.
          </p>
          
          <button className="kerala-why-choose-contact-btn">
            Contact us
            <span className="kerala-contact-arrow">→</span>
          </button>
        </div>

        {/* Right Content - Feature Grid */}
        <div className="kerala-why-choose-right">
          <div className="kerala-features-grid">
            <div className="kerala-feature-item">
              <span className="kerala-feature-text">Industry-specific experience</span>
            </div>
            
            <div className="kerala-feature-item">
              <span className="kerala-feature-text">End-to-end video production in Kerala</span>
            </div>
            
            <div className="kerala-feature-item">
              <span className="kerala-feature-text">Creative storytelling meets business goals</span>
            </div>
            
            <div className="kerala-feature-item">
              <span className="kerala-feature-text">Industry-specific experience</span>
            </div>
            
            <div className="kerala-feature-item">
              <span className="kerala-feature-text">Local support + international quality</span>
            </div>
            
            <div className="kerala-feature-item">
              <span className="kerala-feature-text">End-to-end video production in Kerala</span>
            </div>
            
            <div className="kerala-feature-item">
              <span className="kerala-feature-text">End-to-end video production in Kerala</span>
            </div>
            
            <div className="kerala-feature-item">
              <span className="kerala-feature-text">Fast-to-market video production</span>
            </div>
            
            <div className="kerala-feature-item">
              <span className="kerala-feature-text">End-to-end video production in Kerala</span>
            </div>
            
            <div className="kerala-feature-item">
              <span className="kerala-feature-text">End-to-end video production in Kerala</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}