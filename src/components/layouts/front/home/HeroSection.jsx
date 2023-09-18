import React from "react";

const HeroSection = () => {
  return (
    <div
      className="relative h-80 w-full flex items-center justify-center text-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url(https://img.freepik.com/free-photo/black-friday-elements-assortment_23-2149074076.jpg?w=1800&t=st=1694792000~exp=1694792600~hmac=56259ca1e257860ba5eaf7cc3ff39ea9ef69a830018023b18c84eccd49afd4c6",
      }}
    >
      <div className="absolute top-0 right-0 bottom-0 left-0 bg-gray-900 opacity-75"></div>

      <main className="px-4 sm:px-6 lg:px-8 z-10">
        <div className="text-center">
          <h2 className="text-4xl tracking-tight leading-10 font-medium sm:text-5xl text-white sm:leading-none md:text-6xl">
            Welcome to <span className="text-indigo-600 font-bold">Shop</span>
          </h2>
          <p className="mt-3 text-white sm:mt-5 sm:text-md sm:max-w-xl sm:mx-auto md:mt-5">
            This shop is build with react and Woocommerce API
          </p>
        </div>
      </main>
    </div>
  );
};

export default HeroSection;
