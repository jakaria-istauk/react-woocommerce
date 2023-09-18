import React from "react";
import Product from "./Product";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../../../redux/productReducer";
import { Link } from "react-router-dom";
import { useCallback } from "react";

const Products = (props) => {
  const dispatch = useDispatch();
  const products = useSelector((state) => {
    return state.products;
  });
  const params = { per_page: 12 };

  if (props?.view == "home") {
    params["on_sale"] = true;
    params.per_page = 8;
  }

  const loadMore = useCallback((e) => {
    params.page = products.page + 1;
    dispatch(getProducts(params));
  });

  useEffect(() => {
    dispatch(getProducts(params));
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
          <div className="flex justify-center items-center mt-4">
            {props?.view == "home" ? (
              <Link
                to="/shop"
                className="py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              >
                View All Products
              </Link>
            ) : products.page < 1 ? (
              ""
            ) : (
              <button
                onClick={loadMore}
                className="py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              >
                {products.isLodingMore ? "Loading...." : "Load More"}
              </button>
            )}
          </div>
        </>
      )}
    </section>
  );
};

export default Products;
