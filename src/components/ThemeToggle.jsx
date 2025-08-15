import React from "react";
import "./ThemeToggle.css";

const ThemeToggle = ({ darkMode, setDarkMode }) => {
  return (
    <button
      className="theme-toggle"
      onClick={() => setDarkMode(!darkMode)}
      aria-label={`Switch to ${darkMode ? "light" : "dark"} mode`}
    >
      {darkMode ? "☀️" : "🌙"}
    </button>
  );
};

export default ThemeToggle;