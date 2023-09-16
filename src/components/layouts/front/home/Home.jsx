import React from "react";
import HeroSection from "./HeroSection";
import Categories from "./Categories";
import Products from "../product/Products";

const Home = () => {
  return (
    <>
      <HeroSection />
      <Categories />
      <Products view="home" />
    </>
  );
};

export default Home;
