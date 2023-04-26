import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Products from "../Pages/Products";
import Blog from "../Pages/Blog";
import Contact from "../Pages/Contact";
import ProductdetailPage from "../Pages/Product-detail";
import Blogdetail from "../Pages/Blog_detail";
import Sigin from "../Pages/Sigin";
import Sigup from "../Pages/Sigup";
import Cart from "../Pages/Cart";

const RouterClient = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product" element={<Products />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/signin" element={<Sigin />} />
      <Route path="/signup" element={<Sigup />} />
      <Route path="/productdetail/:id" element={<ProductdetailPage />} />
      <Route path="/blogdetail/:id" element={<Blogdetail />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
};

export default RouterClient;
