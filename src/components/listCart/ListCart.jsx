import React from "react";
import "./listcart.css";
import Cart from "./Cart";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { deleteCart, updateCart, deleteOneCart } from "../../redux/cartSlice";

const ListCart = () => {
  const cart = useSelector((state) => state.cart.value);
  const allPrice = useSelector((state) => state.cart.allPrice);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    const action = deleteCart(id);
    dispatch(action);
  };
  const handincrement = (product) => {
    const action = updateCart(product);
    dispatch(action);
  };
  const handdecrement = (product) => {
    const action = deleteOneCart(product);
    dispatch(action);
  };
  return (
    <div>
      {cart.length === 0 ? (
        <div className="no-cart">
          <p>Không có sản phẩm</p>
          <Link to="/product">
            <button>Xem thêm</button>
          </Link>
        </div>
      ) : (
        ""
      )}
      {cart.map((item, index) => {
        return (
          <>
            <Cart
              item={item}
              handleDelete={handleDelete}
              handincrement={handincrement}
              handdecrement={handdecrement}
              key={index}
            />
          </>
        );
      })}

      {cart.length !== 0 ? (
        <div className="cart__total">
          <p>Tổng số lượng sản phẩm : {totalQuantity} </p>
          <p>Tổng tiền phải thanh toán : {allPrice} </p>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default ListCart;
