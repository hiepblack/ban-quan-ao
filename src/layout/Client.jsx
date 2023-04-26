import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import BeHeader from "../components/be-header/Be_Header";
import RouterClient from "../router/RouterClient";
import CartModel from "../components/model/CartModel";
import ProductDetailModel from "../components/model/ProductDetailModel";
import Search from "../components/header/Search";


const Client = () => {
  return (
    <div className="client">
      <BeHeader />
      <Header />
       <RouterClient />
      <Footer />
      <CartModel />
      <ProductDetailModel />
      <Search />
    </div>
  );
};

export default Client;
