import React from "react";

const Cart = ({ item, handleDelete, handincrement, handdecrement }) => {

  const {nameProduct,imgProduct,quantity,price,totalPrice} = item;
  const remove = () => {
    handleDelete(item._id);
  };
  const add = () => {
    handincrement(item);
  };
  const removeon = () => {
    if (item.quantity === 1) {
      return;
    }
    handdecrement(item);
  };
  
  return (
    <div className="cart">
      <div className="cart__img">
        <img src={imgProduct} alt="" />
      </div>
      <div className="cart__content">
        <p>Tên : {nameProduct}</p>
        <p>Số lượng:</p>
        <div className="cart__content__quantity">
          <button className="btn" onClick={removeon}>
            -
          </button>
          <input type="number" value={quantity} />
          <button className="btn" onClick={add}>
            +
          </button>
        </div>
        <p>Giá : {price}</p>
        <p>Thành tiền : {totalPrice}</p>
      </div>
      <div className="cart__close" onClick={remove}>
        <i className="uil uil-times "></i>
      </div>
    </div>
  );
};
export default Cart;
