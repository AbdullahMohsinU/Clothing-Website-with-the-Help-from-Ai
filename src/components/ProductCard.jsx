import React from "react";
import "./ProductCard.css";

function ProductCard({ id, name, img, price }) {
  return (
    <div className="product-card">
      <img src={img} alt={name} />
      <h2>{name}</h2>
      <p>{price}</p>
    </div>
  );
}

export default ProductCard;