import React, { useState } from "react";
import "./WhoWeAre.css";

export default function WhoWeAre() {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const features = [
    {
      title: "POWERFUL NARRATIVE",
      description: "We bring stories to life through images that speak.",
    },
    {
      title: "CINEMATIC VISION",
      description: "Every project is packed with a unique artistic touch.",
    },
    {
      title: "AUTHENTIC AESTHETICS",
      description: "Every color, lighting, and composition is carefully chosen to create.",
    },
  ];

  return (
    <div className="who-we-are-section">
      <div className="container">
        <div className="who-image-wrapper">
          <img src="/who-we-are-img.jpg" alt="Studio workspace" />
          <div className="who-img-button-container">
            <button className="who-img-button">
              BOOK NOW
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 12H19M19 12L12 5M19 12L12 19"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="content-container">
          <div className="breadcrumb">
            <span>• Who We Are</span>
          </div>

          <h1>
            Why Are We <br /> Different?
          </h1>

          <div className="features-list">
            {features.map((feature, index) => (
              <div key={index} className="feature-item">
                <div className="feature-header" onClick={() => toggleDropdown(index)}>
                  <h3>{feature.title}</h3>
                  <button className={`arrow-btn ${activeDropdown === index ? "active" : ""}`}>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9 18L15 12L9 6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>

                <div className={`feature-content ${activeDropdown === index ? "open" : ""}`}>
                  <p>{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bottom-section">
        <div className="beyond-frame">
          <h2>
            Beyond <br />
            The Frame
          </h2>
        </div>

        <div className="capture-section">
          <div className="capture-text">Capture</div>
          <div className="capture-image">
            <img src="/who-we-are-img.jpg" alt="Behind the scenes" />
          </div>
        </div>
      </div>
    </div>
  );
}
