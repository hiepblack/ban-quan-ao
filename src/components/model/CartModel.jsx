import React from "react";
import ListCart from "../listCart/ListCart";

const CartModel = ({ toggleCart, setToggleCart }) => {
  return (
    <div className={toggleCart ? "nav__shop show__nav__shop" : "nav__shop"}>
      <div className="nav__shop__back"></div>
      <div className="nav__shop__cart">
        <div className="nav__shop__header">
          <p>
            <span>
              <i className="uil uil-shopping-bag "></i>
            </span>
            Giỏ Hàng
          </p>
          <i
            className="uil uil-times "
            onClick={() => setToggleCart(false)}
          ></i>
        </div>
        <div className="nav__shop__body">
          <ListCart/>
        </div>
      </div>
    </div>
  );
};

export default CartModel;
