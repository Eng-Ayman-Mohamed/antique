import React from "react";
import ProductCard from "./ProductCard";
const Products = () => {
  const products = [
    { name: "Vintage Kodak Brownie Camera", price: "100" },
    { name: "Vintage Kodak Brownie Camera", price: "100" },
    { name: "Vintage Kodak Brownie Camera", price: "100" },
    { name: "Vintage Kodak Brownie Camera", price: "100" },
    { name: "Vintage Kodak Brownie Camera", price: "100" },
    { name: "Vintage Kodak Brownie Camera", price: "100" },
    { name: "Vintage Kodak Brownie Camera", price: "100" },
    { name: "Vintage Kodak Brownie Camera", price: "100" },
  ];
  return (
    <div className="ProductsContainer">
      <p className="ProductsContainerHeader">Products</p>
      <div className="ProductsCardsContainer">
        {products.map((product) => {
          return <ProductCard card={product} />;
        })}
      </div>
    </div>
  );
};

export default Products;
