import React from "react";
import image from "./product.png";
import { Link } from "react-router-dom";
const ProductCard = ({ card }) => {
  return (
    <div className="ProductCardContainer">
      <img loading="lazy" src={image} alt="" />
      <div>
        <h4>{card.name}</h4>
        <div className="ProductCardDetails">
          <p className="ProductCardPrice">{card.price} $</p>
          <Link>
            <p>details</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
