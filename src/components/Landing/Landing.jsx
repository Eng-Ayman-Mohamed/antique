import React from "react";
import image from "./Landing.png";
const Landing = () => {
  return (
    <div className="LandingContainer">
      <img src={image} alt="The Golden Majesty" />
      <div className="LandingTextWrapper">
        <p className="LandingImageName">The Golden Majesty</p>
        <p className="BrandVoice">
          Sophisticated and trustworthy
          <br /> appeal to history and tradition.
        </p>
      </div>
    </div>
  );
};

export default Landing;
