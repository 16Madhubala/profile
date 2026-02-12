import { NavLink } from "react-router-dom";
import "./Navbar.css"

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <NavLink className="neon-brand" to="/">
          Madhubala.dev
        </NavLink>
        <div className="navbar-links">
          <NavLink className="nav-link neon-link" to="/" end>
            Home
          </NavLink>
          <NavLink className="nav-link neon-link" to="/resume">
            Resume
          </NavLink>
          <NavLink className="nav-link neon-link" to="/projects">
            Projects
          </NavLink>
          <NavLink className="nav-link neon-link" to="/contact">
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
