import React from "react";
import ProductCard from "../components/ProductCard"; // ✅ No curly braces

function Home() {
  const products = Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    name: `Product ${i + 1}`,
    img: `/assets/product${(i % 5) + 1}.jpg`,
    price: `$${(i + 1) * 10}`
  }));

  return (
    <div className="home">
      <h1>Featured Products</h1>
      <div className="product-grid">
        {products.map((p) => (
          <ProductCard key={p.id} {...p} />
        ))}
      </div>
    </div>
  );
}

export default Home;
