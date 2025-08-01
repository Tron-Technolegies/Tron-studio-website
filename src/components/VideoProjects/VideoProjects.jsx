import React from "react";
import "./VideoProjects.css";

const VideoProjects = () => {
  return (
    <section className="video-projects-wrapper">
      <div className="video-projects">

        {/* Top Section */}
        <div className="top-section">
          <video className="video-bg" src="/hero-video.mp4" autoPlay loop muted playsInline />
          <div className="top-overlay">
            <div className="top-left">SHADOW & LIGHT (2025)</div>
            <div className="bottom-left">FILM & NARRATIVE PROJECTS</div>
            <div className="bottom-right">
              A CINEMATIC EXPLORATION OF <br /> LIGHT AND SHADOW IN URBAN LIFE.
            </div>
            
          </div>
        </div>

        {/* Bottom 3 Grid Videos */}
        <div className="bottom-grid">
          <div className="grid-item">
            <video className="video-bg" src="/hero-video.mp4" autoPlay loop muted playsInline />
            <div className="grid-overlay">
              <div className="grid-top-left">URBAN RHYTHMS</div>
              <div className="grid-bottom-left">COMMERCIAL & BRANDING</div>
            </div>
          </div>
          <div className="grid-item">
            <video className="video-bg" src="/hero-video.mp4" autoPlay loop muted playsInline />
            <div className="grid-overlay">
              <div className="grid-top-left">ECHOES OF THE CITY</div>
              <div className="grid-bottom-left">MUSIC VIDEOS</div>
            </div>
          </div>
          <div className="grid-item">
            <video className="video-bg" src="/hero-video.mp4" autoPlay loop muted playsInline />
            <div className="grid-overlay">
              <div className="grid-top-left">ECHOES OF THE CITY</div>
              <div className="grid-bottom-left">MUSIC VIDEOS</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default VideoProjects;
