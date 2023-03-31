import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Be_Header from "../components/be-header/Be_Header";
import RouterClient from "../router/RouterClient";
import CartModel from "../components/model/CartModel";
import ProductDetailModel from "../components/model/ProductDetailModel";


const Client = () => {
  return (
    <div className="client">
      <Be_Header />
      <Header />
       <RouterClient />
      <Footer />
      <CartModel />
      <ProductDetailModel />
    </div>
  );
};

export default Client;
