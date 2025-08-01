import React from "react";
import "./OurTeam.css";

const team = [
  { name: "Jennifer Le", role: "CEO/Founder", image: "/Sampleteammember.png" },
  { name: "Joeseph Amber", role: "Director", image: "/Sampleteammember.png" },
  { name: "Monica Sanchez", role: "FX Artist", image: "/Sampleteammember.png" },
  { name: "Monica Sanchez", role: "FX Artist", image: "/Sampleteammember.png" },
  { name: "Phoebe Buffray", role: "Marketer", image: "/Sampleteammember.png" },
  { name: "Joey Tribiany", role: "Camera-man", image: "/Sampleteammember.png" },
  { name: "Chandler Russell", role: "Editor", image: "/Sampleteammember.png" },
];

export default function OurTeam() {
  return (
    <section className="ourteam-section">
      <div className="top-container">
        <div className="text-container">
          <img src="/Subtract.png" alt="background icon" className="icon-bg" />
          <h3 className="ourteam-title">OUR TEAM</h3>
          <h1 className="meetbrains-header">Meet the brains</h1>
          <p className="ourteam-desc">Contact us to communicate and ask questions</p>
        </div>

        <div className="top-members">
          {team.slice(0, 2).map((member, index) => (
            <div className="team-card" key={index}>
              <img src={member.image} alt={member.name} />
              <div className="card-info">
                <p className="name">{member.name}</p>
                <p className="role">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="card-grid">
        {team.slice(2).map((member, index) => (
          <div className="team-card" key={index}>
            <img src={member.image} alt={member.name} />
            <div className="card-info">
              <p className="name">{member.name}</p>
              <p className="role">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
