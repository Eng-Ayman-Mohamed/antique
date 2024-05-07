import React from "react";
import NavBar from "../../components/NavBar";
import Header from "../../components/Header";
import Offers from "../../components/Offers";
import Landing from "../../components/Landing/Landing";
import Categories from "../../components/Categories";
import Footer from "../../components/Footer";

const MainPage = () => {
  return (
    <div className="MainPageContainer">
      <NavBar />
      <Header />
      <Offers />
      <Landing />
      <Categories />
      <Footer />
    </div>
  );
};

export default MainPage;
