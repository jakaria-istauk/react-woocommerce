import React from "react";
import Product from "./Product";

const Products = (props) => {
  return (
    <section className="py-5">
      {props?.view == "home" ? (
        <h4 className="text-center text-3xl tracking-tight font-medium sm:text-5xl text-gray sm:leading-none md:text-3xl mb-4">
          On Sale Products
        </h4>
      ) : (
        ""
      )}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </section>
  );
};

export default Products;
