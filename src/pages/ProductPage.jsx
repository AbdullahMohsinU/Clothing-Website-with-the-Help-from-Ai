import React from "react";
import { useParams } from "react-router-dom";

export default function ProductPage() {
  const { id } = useParams();
  return (
    <div className="page">
      <h1>Product {id}</h1>
      <p>Details about product {id} go here.</p>
    </div>
  );
}
