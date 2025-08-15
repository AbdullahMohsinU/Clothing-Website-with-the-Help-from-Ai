import React from "react";
import { Link } from "react-router-dom";
import "./About.css";

function About() {
  return (
    <div className="about-page">
      <h1 className="about-title">About MEN-OUTFITTER</h1>
      <p className="about-subtitle">Your destination for premium men's fashion.</p>

      <section className="about-section">
        <h2>Our Story</h2>
        <p>
          Founded in 2020, MEN-OUTFITTER was born from a passion for quality craftsmanship and timeless style. We believe that every man deserves to feel confident and stylish in outfits that reflect their individuality. From classic shirts to modern jackets, our curated collections are designed to elevate your wardrobe with elegance and versatility.
        </p>
      </section>

      <section className="about-section">
        <h2>Our Mission</h2>
        <p>
          At MEN-OUTFITTER, our mission is to provide high-quality, sustainable, and stylish clothing that empowers men to express themselves. We source premium materials and work with skilled artisans to create pieces that combine comfort, durability, and fashion-forward design.
        </p>
      </section>

      <section className="about-section">
        <h2>Our Values</h2>
        <ul className="about-values">
          <li><strong>Quality:</strong> Every stitch and fabric choice reflects our commitment to excellence.</li>
          <li><strong>Sustainability:</strong> We prioritize eco-friendly materials and ethical production practices.</li>
          <li><strong>Style:</strong> Our designs blend classic and contemporary trends to suit every occasion.</li>
          <li><strong>Customer Focus:</strong> Your satisfaction drives us to deliver exceptional products and service.</li>
        </ul>
      </section>

      <section className="about-cta">
        <h2>Join Our Journey</h2>
        <p>Explore our collections and find the perfect outfit to define your style.</p>
        <Link to="/categories" className="cta-button">Shop Now</Link>
      </section>
    </div>
  );
}

export default About;