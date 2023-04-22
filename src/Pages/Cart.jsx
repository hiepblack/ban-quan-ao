import React, { useState } from "react";
import "../style/cart.css";
import Title from "../components/title/Title";
import CartModel from "../components/cartshop/CartModel";
import { useSelector, useDispatch } from "react-redux";
import {
  deleteCart,
  updateCart,
  deleteOneCart,
  deleteAllCart,
} from "../redux/cartSlice.js";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import { BASE_URL } from "../helper";

const Cart = () => {
  const [loading, setLoading] = useState(false);
  const [infor, setInfor] = useState({
    name: "",
    email: "",
    sdt: "",
    location: "",
  });
  const [done, setDone] = useState(false);
  const listCart = useSelector((state) => state.cart.value);
  const allPrice = useSelector((state) => state.cart.allPrice);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!infor.name && !infor.email && !infor.sdt && !infor.location) {
      toast.warning("Điền đầy đủ thông tin đặt hàng");
      return;
    }
    setLoading(true);
    const dataCartDetail = {
      list: listCart,
      price: allPrice,
      quantity: totalQuantity,
      discount: "khong",
    };
    const res = await fetch(`${BASE_URL}/orderdetail`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataCartDetail),
    });
    const data = await res.json();
    localStorage.setItem("order", JSON.stringify(data.detail));
    const dataCart = {
      email: infor.email,
      username: infor.name,
      oderdetailId: data.detail._id,
      totalAmount: allPrice,
      address: infor.location,
      phone: infor.sdt,
      note: "tạm thời",
      orderstatus: "pending",
    };
    const resOrder = await fetch(`${BASE_URL}/order`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataCart),
    });
    const orderData = await resOrder.json();
    if (orderData.success) {
      setLoading(false);
      toast.success("Bạn Vui Lòng Kiểm tra Email");
      setDone(true);
      setTimeout(() => {
        navigate("/");
      }, [3000]);
      handleDeleteAll();
    }
  };

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

  const handleDeleteAll = () => {
    const action = deleteAllCart(true);
    dispatch(action);
  };
  return (
    <>
      {done ? (
        <section className="container shop__cart">
          <div>
            <Title name={"Giỏ Hàng Của Bạn"} desc={`Cảm ơn bạn đã đặt hàng`} />
          </div>
          <div className="check__icon">
            <i class="bx bx-check-circle"></i>
          </div>
        </section>
      ) : (
        <>
          <section className="container shop__cart">
            <div>
              <Title
                name={"Giỏ Hàng Của Bạn"}
                desc={`Có ${totalQuantity} sản phẩm trong giỏ hàng`}
              />
            </div>
            <div className="shop__cart__body">
              {listCart.length !== 0 ? (
                <>
                  <div>
                    {listCart.map((product, index) => {
                      return (
                        <CartModel
                          key={index}
                          product={product}
                          handleDelete={handleDelete}
                          handincrement={handincrement}
                          handdecrement={handdecrement}
                        />
                      );
                    })}
                  </div>
                  <div className="shop__cart__form">
                    <form action="" onSubmit={handleSubmit}>
                      <div className="shop__cart__form_title">
                        <p>Thông tin đặt hàng</p>
                      </div>
                      <div className="shop__cart__form_input">
                        <label htmlFor="name">Tên Khách hàng</label>
                        <input
                          type="text"
                          placeholder="Name"
                          value={infor.name}
                          onChange={(e) => {
                            setInfor((pre) => {
                              return {
                                ...pre,
                                name: e.target.value,
                              };
                            });
                          }}
                        />
                      </div>
                      <div className="shop__cart__form_input">
                        <label htmlFor="name">Email</label>
                        <input
                          type="email"
                          placeholder="Email"
                          value={infor.email}
                          onChange={(e) => {
                            setInfor((pre) => {
                              return {
                                ...pre,
                                email: e.target.value,
                              };
                            });
                          }}
                        />
                      </div>
                      <div className="shop__cart__form_input">
                        <label htmlFor="name">Sđt</label>
                        <input
                          type="number"
                          placeholder="Phone number"
                          value={infor.sdt}
                          onChange={(e) => {
                            setInfor((pre) => {
                              return {
                                ...pre,
                                sdt: e.target.value,
                              };
                            });
                          }}
                        />
                      </div>
                      <div className="shop__cart__form_input">
                        <label htmlFor="name">Địa chỉ</label>
                        <input
                          type="text"
                          placeholder="Location"
                          value={infor.location}
                          onChange={(e) => {
                            setInfor((pre) => {
                              return {
                                ...pre,
                                location: e.target.value,
                              };
                            });
                          }}
                        />
                      </div>
                      <div className="shop__cart__form_input">
                        <p className="money">Tổng tiền: {allPrice}₫</p>
                      </div>
                      <div className="shop__cart__form__footer">
                        <Link to="/product">
                          <button>Tiếp tục mua hàng</button>
                        </Link>
                        <button type="submit" disabled={loading}>
                          Thanh Toán
                        </button>
                      </div>
                    </form>
                  </div>
                </>
              ) : (
                <div className="shop__cart__none">Không có sản phẩm</div>
              )}
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default Cart;
