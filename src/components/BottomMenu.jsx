import React from "react";
import { Link } from "react-router-dom";
import "./BottomMenu.css";

function BottomMenu() {
  return (
    <div className="bottom-menu">
      <Link to="/">🏠</Link>
      <Link to="/categories">🛍️</Link>
      <Link to="/contact">📞</Link>
    </div>
  );
}

export default BottomMenu;
