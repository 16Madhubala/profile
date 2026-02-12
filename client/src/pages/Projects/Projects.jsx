import "./Projects.css";
import { motion } from "framer-motion";

import drowsinessImg from "../../assets/images/drowsiness.png";
import skillswapImg from "../../assets/images/skillswap.png";
import jobportalImg from "../../assets/images/jobportal.png";
import medicalInventoryImg from "../../assets/images/medicalinventory.png"; // new image

const projects = [
  {
    title: "Drowsiness Detection System",
    image: drowsinessImg,
    description:
      "Real-time driver drowsiness detection using computer vision to prevent accidents.",
    tech: ["Python", "OpenCV", "ML"],
    github: "https://github.com/16Madhubala/drowsiness-detection",
  },
  {
    title: "SkillSwap Platform",
    image: skillswapImg,
    description:
      "A MERN-based platform where users can learn skills.",
    tech: ["React", "Node.js", "MongoDB"],
    github: "https://github.com/16Madhubala/Skillswap",
  },
  {
    title: "Job Portal Application",
    image: jobportalImg,
    description:
      "Full-stack job portal with authentication, job listings, and applications.",
    tech: ["MERN", "JWT", "REST API"],
    github: "https://github.com/yourusername/job-portal",
  },
  {
    title: "Medical Inventory System",
    image: medicalInventoryImg,
    description:
      "A system to manage hospital/clinic medical inventory efficiently with stock tracking.",
    tech: ["Salesforce"],
    github: "https://github.com/16Madhubala/Medical-Inventory-Management",
  },
];

function Projects() {
  return (
    <section className="projects-section">
      <h2 className="projects-title neon-glow-blue">My Projects</h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="project-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="image-wrapper">
              <img src={project.image} alt={project.title} />
              <div className="overlay">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="overlay-btn"
                >
                  View on GitHub
                </a>
              </div>
            </div>

            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className="tech-stack">
                {project.tech.map((tech, i) => (
                  <span key={i} className="tech-badge">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
