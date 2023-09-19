import React from "react";
import { Link } from "react-router-dom";

const Category = ({ category }) => {
  let placeholderImage =
    "https://placehold.co/800?text=Category+Image&font=merienda";
  return (
    <div>
      <Link to={`/category/${category?.id}/${category?.slug}`}>
        <figure className=" bg-white rounded-lg drop-shadow-lg">
          <img
            className="h-40 w-full object-cover rounded-tl-lg rounded-tr-lg"
            src={category?.image ?? placeholderImage}
            alt={category?.name}
          />
          <figcaption className="px-5 py-3 text-center text-lg font-semibold">
            {category?.name}
          </figcaption>
        </figure>
      </Link>
    </div>
  );
};

export default Category;
