import React from "react";
import "./CraftingMagic.css";

const CraftingMagic = () => {
  return (
    <section className="crafting-section">
      <div className="crafting-header">
        <img src="/star-icon.png" alt="star" className="star-icon" />
        <h2>CRAFTING MAGIC</h2>
        <img src="/star-icon.png" alt="star" className="star-icon" />
      </div>

      <div className="crafting-content">
        {/* Left Column */}
        <div className="crafting-left">
          <div className="text-block">
            <h4>CONCEPT & STORYTELLING</h4>
            <p>
              Everything starts with an idea. We explore unique concepts, build a strong narrative,
              and determine the visual aesthetics that will be used. This is the stage where the
              story is truly born.
            </p>
          </div>

          <div className="image-row">
            <img src="/concept1.png" alt="Concept A" />
            <img src="/concept2.png" alt="Concept B" />
          </div>

          <div className="floating-label">
            brainstorming <br /> ideas and visual <br /> references
          </div>

          <h3 className="brainstorm-title">
            BRAINSTORMING <br /> IDEAS VISUAL
          </h3>
        </div>

        {/* Right Column */}
        <div className="crafting-right">
          <div className="image-wrapper">
            <img src="/team-meeting.png" alt="Team Collaboration" />
            <button className="book-now">
              BOOK NOW <span className="arrow">→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CraftingMagic;
