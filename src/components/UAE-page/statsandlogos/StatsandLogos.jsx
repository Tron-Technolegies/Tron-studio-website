import React from "react";
import "./StatsandLogos.css";
export default function StatsAndLogos() {
  return (
    <div>
      <section className="statsandlogos-section">
        <div className="stats-container">
          <div className="stats-box">
            <h3>3.5K</h3>
            <p>Jobs done successfully</p>
          </div>
          <div className="stats-box">
            <h3>2.8K</h3>
            <p>Worldwide clients</p>
          </div>
          <div className="stats-box">
            <h3>12+</h3>
            <p>Years of experience</p>
          </div>
          <div className="stats-box">
            <h3>30+</h3>
            <p>Trusted companies</p>
          </div>
        </div>
    </section>

        <div className="logos-container">
          <img src="/Brand-partners.png" alt="logos" />
        </div>
      
    </div>
  );
}