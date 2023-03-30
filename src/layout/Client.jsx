import React,{useState} from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Be_Header from "../components/be-header/Be_Header";
import RouterClient from "../router/RouterClient";
import CartModel from "../components/model/CartModel";

const Client = () => {
  const[toggleCart,setToggleCart] = useState(false)
  return (
    <div className="client">
      <Be_Header />
      <Header toggleCart={toggleCart} setToggleCart={setToggleCart}/>
       <RouterClient setToggleCart={setToggleCart}/>
      <Footer />
      <CartModel toggleCart={toggleCart} setToggleCart={setToggleCart}/>
    </div>
  );
};

export default Client;
