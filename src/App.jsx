import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import CarouselSlider from "./components/CarouselSlider";
import BottomMenu from "./components/BottomMenu";
import Chatbot from "./components/Chatbot";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Categories from "./pages/Categories";
import ProductPage from "./pages/ProductPage";
import ThemeToggle from "./components/ThemeToggle";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark" || false;
  });

  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light");
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <Router>
      <div className={darkMode ? "app dark" : "app"}>
        <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />
        <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
        <CarouselSlider />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/product/:id" element={<ProductPage />} />
        </Routes>
        <Chatbot />
        <BottomMenu />
      </div>
    </Router>
  );
}

export default App;