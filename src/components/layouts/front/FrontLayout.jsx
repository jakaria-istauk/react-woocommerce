import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../common/Header";
import Footer from "../../common/Footer";

const FrontLayout = () => {
  return (
    <>
      <Header />
      <div className="container pt-8 m-auto mb-0 mt-8 pb-1">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default FrontLayout;
