import React from "react";
import { Link } from "react-router-dom";

const Category = ({ category }) => {
  return (
    <div>
      <Link to={`/category/${category.name}`}>
        <img
          className="h-auto max-w-full rounded-lg"
          src={category.image_url}
          alt={category.name}
        />
      </Link>
    </div>
  );
};

export default Category;
