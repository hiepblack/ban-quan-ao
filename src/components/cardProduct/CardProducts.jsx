import React from "react";
import "./cardproducts.css";
import { Link } from "react-router-dom";

const CardProducts = ({ product,handleDetail }) => {
  
  return (
    <div className="product-card">
      <div className="product__img">
          <img src={product?.image.mainImage} alt="" />
          <div className="product__img__btn">
            <button onClick={()=>{handleDetail(product.id)}}>Xem Nhanh</button>
          </div>
      </div>
      <div className="product-details">
        <span className="product-catagory">{product?.category}</span>
        <h4>
          <Link to={`/productdetail/${product?.id}`}>{product?.name}</Link>
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
              <i className="fa fa-shopping-cart"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardProducts;
