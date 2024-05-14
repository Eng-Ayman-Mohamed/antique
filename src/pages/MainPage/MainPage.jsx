import React from "react";
import NavBar from "../../components/NavBar";
import Header from "../../components/Header";
import Offers from "../../components/Offers";
import Landing from "../../components/Landing/Landing";
import Categories from "../../components/Categories/Categories";
import Products from "../../components/Products/Products";
import Footer from "../../components/Footer";

const MainPage = () => {
  return (
    <div className="MainPageContainer">
      <NavBar />
      <Header />
      <Offers />
      <Landing />
      <Categories />
      <Products />
      <Footer />
    </div>
  );
};

export default MainPage;
