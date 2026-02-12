import React from "react";
import "./Resume.css";
import resumePDF from "../../assets/docs/Madhubala_Resume.pdf";

function Resume() {
  return (
    <section className="resume-section">
      <h2 className="neon-glow-blue resume-title">My Resume</h2>

      <div className="resume-content">
        <a
          href={resumePDF}
          download="Madhubala_Resume.pdf"
          className="resume-btn"
        >
          Download Resume
        </a>

        <div className="resume-embed">
          <iframe
            src={resumePDF}
            title="Madhubala Resume"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default Resume;
