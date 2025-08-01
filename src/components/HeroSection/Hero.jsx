import React from "react";
import "./Hero.css";
import Navbar from "../Navbar/Navbar";

function Hero() {
  return (
    <section className="hero-section">
      <Navbar />
      <div className="hero-section-video-container">
        <div className="hero-section-video-overlay">
          <video
            src="/hero-video.mp4"
            autoPlay
            muted
            loop
            className="hero-section-hero-video"
          ></video>
        </div>
        <h1>
          High Impact Video & <br />
          <span style={{ color: "#FFC43A", fontSize: "45px" }}>
            Creative Studio{" "}
          </span>
          for <br />Modern Brands
        </h1>
      </div>

      <div className="hero-section-bottom-section">
        <div className="hero-section-card">
          <img
            src="/hero-card.png"
            alt="Team Member"
            className="hero-section-card-image"
          />
          <div className="hero-section-card-content">
            <div className="hero-section-card-content-arrow">
              <h3>
                EVERY COLOR HAS
                <br />
                A STORY.
              </h3>
              <img src="/card-arrow.png" alt="" />
            </div>
            <p>
              Jason Reed is a cinematic director with over a decade of
              experience in the film and commercial industries.
            </p>
          </div>
        </div>

        <div className="hero-section-button-container">
          <button className="hero-section-button">
            CONSULTATION
            <img src="/arrow-right.png" alt="" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;