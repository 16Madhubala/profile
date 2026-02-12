import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();

  return (
    <section className="home-section">
      <div className="home-grid">

        {/* LEFT — HERO */}
        <div className="home-content">
          <h1 className="neon-glow-blue reveal">
            Hi, I’m Madhubala
          </h1>

          <p className="neon-glow-green reveal delay-1">
            MERN Stack Developer <span>|</span> Computer Vision & AI
          </p>

          <p className="hero-desc reveal delay-2">
            I design and build scalable MERN applications and intelligent
            computer vision systems that solve real-world problems.
          </p>

          <div className="btn-group reveal delay-3">
            <button
              className="neon-btn"
              onClick={() => navigate("/projects")}
            >
              View Projects
            </button>

            <button
              className="neon-btn outline"
              onClick={() => navigate("/contact")}
            >
              Contact Me
            </button>
          </div>
        </div>

        {/* RIGHT — CLOUD FEATURED WORKS */}
        <div className="featured-clouds">
          <h2 className="section-title">Featured Works</h2>

          <div className="cloud cloud-1">
            <h3>Drowsiness Detection</h3>
            <p>
              Real-time driver monitoring using OpenCV, facial landmarks,
              and alert systems.
            </p>
          </div>

          <div className="cloud cloud-2">
            <h3>Medical Inventory System</h3>
            <p>
              MERN-based inventory management with role-based access
              and smart alerts.
            </p>
          </div>

          <div className="cloud cloud-3">
            <h3>SkillSwap Platform</h3>
            <p>
              Udemy-like learning platform with authentication, courses,
              and user dashboards.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Home;
