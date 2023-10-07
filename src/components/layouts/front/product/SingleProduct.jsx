import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProducts } from "../../../../redux/productReducer";
import { useEffect } from "react";

const SingleProduct = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const product = useSelector((state) => {
    return state.products;
  });
  useEffect(() => {
    dispatch(getProducts(params));
  }, [dispatch]);
  console.log(product);
  return (
    <>
      {product.isLoading ? (
        "Loading..."
      ) : (
        <div className="single-product">
          <div className="product-image-container">
            <img
              className="rounded-t-lg h-80 w-auto"
              src={product.single?.images?.[0].src}
              alt=""
            />
          </div>
          <div className="product-content-container">
            <h1 className="md:text-3xl text-auto">{product.single?.name}</h1>
          </div>
        </div>
      )}
    </>
  );
};

export default SingleProduct;
