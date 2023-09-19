import React from "react";
import Category from "./Category";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCategoires } from "../../../../redux/productReducer";

const Categories = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => {
    return state.products.categories;
  });
  useEffect(() => {
    dispatch(getCategoires());
  }, [dispatch]);

  return (
    <section className="py-5">
      <h4 className="text-center text-3xl tracking-tight font-medium sm:text-5xl text-gray sm:leading-none md:text-3xl mb-4">
        Shop By Categories
      </h4>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {categories.data?.map((category, index) => (
          <Category key={index} category={category} />
        ))}
      </div>
    </section>
  );
};

export default Categories;
