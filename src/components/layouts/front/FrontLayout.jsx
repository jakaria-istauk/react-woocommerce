import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../common/Header";
import Footer from "../../common/Footer";

const FrontLayout = () => {
  return (
    <>
      <Header />
      <div className="container p-8 m-10 mb-0 pb-1">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default FrontLayout;
