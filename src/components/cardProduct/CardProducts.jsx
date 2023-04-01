import React, { useContext } from "react";
import "./cardproducts.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { useDispatch } from "react-redux";
import { addCart } from "../../redux/cartSlice";

const CardProducts = ({ product }) => {
  const { setOpenModelDetail, setProductId, setToggleCart } =
    useContext(AuthContext);
  const dispatch = useDispatch();
  const handleAdd = () => {
    const newProduct = {
      _id: product.id,
      nameProduct: product.nameProduct,
      price: product.price,
      quantity: 1,
      imgProduct: product.imgProduct[0],
      size: 'M',
      colors: "black",
      totalPrice: product.price * 1,
    };
    const action = addCart(newProduct);
    dispatch(action);
    setToggleCart(true);
    console.log("abc");
  };
  const handleShowProductDetail = () => {
    setOpenModelDetail(true);
    setProductId(product._id);
  };
  return (
    <div className="product-card">
      <div className="product__img">
        <img src={product?.imgProduct[0]} alt="" />
        <div className="product__img__btn">
          <button onClick={handleShowProductDetail}>Xem Nhanh</button>
        </div>
      </div>
      <div className="product-details">
        <span className="product-catagory">{product?.brand}</span>
        <h4>
          <Link to={`/productdetail/${product?._id}`}>{product?.nameProduct}</Link>
        </h4>
        <div className="product-bottom-details">
          <div className="product-links">
            <Link to="">
              <i className="fa fa-heart"></i>
            </Link>
          </div>
          <div className="product-price">
            <small>$96.00</small>${product?.price}
          </div>
          <div className="product-links">
            <Link to="">
              <i className="fa fa-shopping-cart" onClick={handleAdd}></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardProducts;
