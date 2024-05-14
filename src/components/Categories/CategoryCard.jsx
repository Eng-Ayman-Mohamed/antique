import React from "react";
import image from "./Cam.png";
import { Link } from "react-router-dom";
const CategoryCard = ({ card }) => {
  return (
    <div className="CategoryCardContainer">
      <Link>
        <img src={image} alt="" />
        <div className="CategoryCardDetails">
          <h3>{card.name}</h3>
        </div>
      </Link>
    </div>
  );
};

export default CategoryCard;
