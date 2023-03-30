import React from "react";

const Cart = ({ item,handleDelete,handincrement,handdecrement }) => {
  const remove = ()=>{
    handleDelete(item.id)
  }
  const add = ()=>{
    handincrement(item)
  }
  const removeon = ()=>{
    if(item.quantity === 0){
      return
    }
    handdecrement(item)
  }
  return (
    <div className="cart">
      <div className="cart__img">
        <img src={item.image} alt="" />
      </div>
      <div className="cart__content">
        <p>Tên : {item.name}</p>
        <p>Số lượng:</p>
        <div className="cart__content__quantity">
          <button className="btn"  onClick={removeon} >
            -
          </button>
          <input type="number" value={item.quantity} />
          <button className="btn" onClick={add}>
            +
          </button>
        </div>
        <p>Giá : {item.price}</p>
        <p>Thành tiền : {item.totalPrice}</p>
      </div>
      <div className="cart__close" onClick={remove}>
        <i className="uil uil-times "></i>
      </div>
    </div>
  );
};

export default Cart;
