import React, { useContext } from "react";
import ListCart from "../listCart/ListCart";
import { AuthContext } from "../../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";

const CartModel = () => {
  const { toggleCart, setToggleCart } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleShopCart = () => {
    navigate("/cart");
    setToggleCart(false);
  };
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
            <span
              className="nav__shop__cartshop"
              onClick={handleShopCart}
            >
              Xem trang giỏ hàng
            </span>
          </p>
          <i
            className="uil uil-times "
            onClick={() => setToggleCart(false)}
          ></i>
        </div>
        <div className="nav__shop__body">
          <ListCart />
        </div>
      </div>
    </div>
  );
};

export default CartModel;
