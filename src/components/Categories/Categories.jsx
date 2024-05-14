import React from "react";
import Slider from "react-slick";
import CategoryCard from "./CategoryCard";

const Categories = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
    ],
  };
  const Categories = [
    { name: "camera", image: "./Cam.png" },
    { name: "camera1", image: "./Cam.png" },
    { name: "camera2", image: "./Cam.png" },
    { name: "camera", image: "./Cam.png" },
    { name: "camera1", image: "./Cam.png" },
    { name: "camera2", image: "./Cam.png" },
  ];
  return (
    <div className="CategoriesContainer">
      <p className="CategoriesHeader">See our categories</p>
      <Slider className="CategoryCardsSlider" {...settings}>
        {Categories.map((cat) => {
          return <CategoryCard card={cat} />;
        })}
      </Slider>
    </div>
  );
};

export default Categories;
