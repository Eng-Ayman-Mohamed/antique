import React from "react";
import NavBar from "../../components/NavBar";
import Header from "../../components/Header";
import Offers from "../../components/Offers";
import Footer from "../../components/Footer";

const MainPage = () => {
  return (
    <div className="MainPageContainer">
      <NavBar />
      <Header />
      <Offers />
      <Footer />
    </div>
  );
};

export default MainPage;
