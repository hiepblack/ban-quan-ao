import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Products from "../Pages/Products";
import Blog from "../Pages/Blog";
import Contact from "../Pages/Contact";
import ProductdetailPage from "../Pages/Product-detail";

const RouterClient = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product" element={<Products />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/Productdetail" element={<ProductdetailPage />} />
    </Routes>
  );
};

export default RouterClient;
