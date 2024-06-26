import React, { useState } from "react";
import "./Navbar.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

// Call AOS.init()
AOS.init({
  offset: 100,
  duration: 1000,
  easing: "ease-in",
});

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Top left corner heading */}
        <Link to="/" className="navbar-logo">
          <img
            src="/img/Logo1.png"
            border="0"
            style={{width: "10rem"}}
          />
        </Link>
        {/* Nav Icon */}
        <div
          className={`menu-btn ${menuOpen ? "active" : ""}`}
          onClick={() => {
            setMenuOpen(!menuOpen);
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        {/* Navigation links */}
        <ul className={`nav-menu ${menuOpen ? "active" : ""}`}>
          <li className="nav-item">
            <Link to="/" className="nav-links">
              HOME
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/portfolio" className="nav-links">
              PORTFOLIO
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/services" className="nav-links">
              SERVICES
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/gallery" className="nav-links">
              GALLERY
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contactPage" className="nav-links">
              CONTACT US
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
