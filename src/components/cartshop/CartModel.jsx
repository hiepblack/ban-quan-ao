import React from "react";
import "./cartmodel.css";

const CartModel = ({ product,handleDelete,handincrement ,handdecrement}) => {
  const remove = () => {
    handleDelete(product.id);
  };
  const add = () => {
    handincrement(product);
  };
  const removeon = () => {
    if (product.quantity === 1) {
      return;
    }
    handdecrement(product);
  };

  return (
    <div className="CartModel">
      <img src={product.image} alt="" />
      <div className="CartModel__body">
        <div className="CartModel__body__title">
          <p>{product.name}</p>
          <p>{product.price}</p>
          <p>{product.color}</p>
          <p>{product.size}</p>
          <div className="CartModel__body__button">
            <button onClick={removeon}>-</button>
            <input type="number" value={product.quantity} />
            <button onClick={add}>+</button>
          </div>
        </div>
        <div className="CartModel__body__close">
          <p onClick={remove}>
            <i class="uil uil-times"></i>
          </p>
          <p>{product.totalPrice}</p>
        </div>
      </div>
    </div>
  );
};

export default CartModel;
