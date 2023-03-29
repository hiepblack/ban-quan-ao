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

const RouterClient = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product" element={<Products />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/sigin" element={<Sigin />} />
      <Route path="/sigup" element={<Sigup />} />
      <Route path="/productdetail/:id" element={<ProductdetailPage />} />
      <Route path="/blogdetail" element={<Blogdetail/>} />
    </Routes>
  );
};

export default RouterClient;
