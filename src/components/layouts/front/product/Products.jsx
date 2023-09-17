import React from "react";
import Product from "./Product";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../../../redux/productReducer";
import { Link } from "react-router-dom";

const Products = (props) => {
  const dispatch = useDispatch();
  const products = useSelector((state) => {
    return state.products;
  });
  useEffect(() => {
    dispatch(getProducts({ per_page: 8, on_sale: true }));
  }, [dispatch]);
  return (
    <section className="py-5">
      {products.isLoading ? (
        "Products Loading..."
      ) : (
        <>
          {props?.view == "home" ? (
            <h4 className="text-center text-3xl tracking-tight font-medium sm:text-5xl text-gray sm:leading-none md:text-3xl mb-4">
              On Sale Products
            </h4>
          ) : (
            ""
          )}
          <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
            {products.data?.map((product) => (
              <Product key={product.id} product={product} />
            ))}
          </div>
          <div className="grid mt-2">
            <Link to="/products">View All Products</Link>
          </div>
        </>
      )}
    </section>
  );
};

export default Products;
