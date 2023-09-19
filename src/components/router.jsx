import React from "react";
import FrontLayout from "./layouts/front/frontLayout";
import Products from "./layouts/front/product/Products";
import { createBrowserRouter } from "react-router-dom";
import Home from "./layouts/front/home/Home";
import Cart from "./layouts/front/checkout/Cart";
import Dashboard from "./layouts/front/customer/dashboard";
import NotFound from "./common/NotFound";

const routes = [
  {
    path: "/",
    exact: true,
    name: "Home",
    element: <FrontLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/shop",
        element: <Products />,
      },
      {
        path: "/category/:category/:cat_slug",
        element: <Products />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/my-account",
        element: <Dashboard />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
];

export default createBrowserRouter(routes);
