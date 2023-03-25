import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Be_Header from "../components/be-header/Be_Header";
import RouterClient from "../router/RouterClient";

const Client = () => {
  return (
    <>
      <Be_Header />
      <Header />
       <RouterClient />
      <Footer />
    </>
  );
};

export default Client;
