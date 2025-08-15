import React from "react";
import { Link } from "react-router-dom";
import "./Categories.css";
const categories = [
  {
    id: 1,
    name: "Shirts",
    description: "Explore our collection of stylish shirts, from casual to formal.",
    img: "assets/shirts.jpg",
    path: "/categories/shirts",
  },
  {
    id: 2,
    name: "Pants",
    description: "Find the perfect fit with our range of jeans, chinos, and more.",
    img: "assets/pant.jpeg",
    path: "/categories/pants",
  },
  {
    id: 3,
    name: "Jackets",
    description: "Stay warm and trendy with our premium jackets and coats.",
    img: "assets/jacket.jpg",
    path: "/categories/jackets",
  },
  {
    id: 4,
    name: "Accessories",
    description: "Complete your look with belts, hats, and more.",
    img: "assets/accessories.jpeg",
    path: "/categories/accessories",
  },
];

function Categories() {
  return (
    <div className="categories-page">
      <h1 className="categories-title">Browse Our Categories</h1>
      <p className="categories-subtitle">Discover the latest trends in men's fashion at MEN-OUTFITTER.</p>
      <div className="category-grid">
        {categories.map((category) => (
          <Link to={category.path} key={category.id} className="category-card">
            <img src={category.img} alt={category.name} />
            <h2>{category.name}</h2>
            <p>{category.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Categories;