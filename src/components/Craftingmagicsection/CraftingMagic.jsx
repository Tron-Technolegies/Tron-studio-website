import React from "react";
import "./CraftingMagic.css";

const CraftingMagic = () => {
  return (
    <section className="crafting-section">
      <div className="crafting-header">
        <img src="/star-icon.png" alt="star" className="star-icon" />
        <h2>Crafting Magic</h2>
        <img src="/star-icon.png" alt="star" className="star-icon" />
      </div>

      <div className="crafting-content">
        {/* Left Side */}
        <div className="content-left">
          <h4>CONCEPT & STORYTELLING</h4>
          <p>
            Everything starts with an idea. We explore unique concepts, build a strong narrative, and
            determine the visual aesthetics that will be used. This is the stage where the story is truly born.
          </p>

          <div className="image-pair">
            <img src="/concept1.png" alt="Concept 1" />
            <img src="/concept2.png" alt="Concept 2" />
          </div>

          <div className="overlay-box">
            brainstorming <br /> ideas and visual <br /> references
          </div>

          <h3 className="brainstorm-text">
            brainstorming <br /> ideas visual
          </h3>
        </div>

        {/* Right Side */}
        <div className="content-right">
          <div className="image-container">
            <img src="/team-meeting.png" alt="Team" className="meeting-img" />
            <button className="book-now">
              BOOK NOW <span className="arrow-icon">→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CraftingMagic;