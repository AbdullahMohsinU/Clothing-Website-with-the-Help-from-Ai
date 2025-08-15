// Navbar.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ darkMode, toggleTheme }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar" role="navigation" aria-label="Main navigation">
      <div className="navbar-container">
        <Link to="/" className="logo">
          <span className="logo-text">MEN-OUTFITTER</span>
        </Link>

        <button
          className={`hamburger ${isMobileMenuOpen ? "active" : ""}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`nav-links ${isMobileMenuOpen ? "active" : ""}`}>
          <li>
            <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/categories" onClick={() => setIsMobileMenuOpen(false)}>
              Categories
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={() => setIsMobileMenuOpen(false)}>
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
              Contact
            </Link>
          </li>
          <li>
            <button
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label={`Switch to ${darkMode ? "light" : "dark"} mode`}
            >
              {darkMode ? "☀️" : "🌙"}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;