import React from "react";
import "./cardcategory.css";
import { Link } from "react-router-dom";
import img from "../../assets/home1.webp"

const CardCategory = () => {
  return (
    <div className="product-card">
      <div className="product__img">
          <img src={img} alt="" />
          <div className="product__img__btn">
            <button >Xem Nhanh</button>
          </div>
      </div>
      <div className="product-details">
        <span className="product-catagory">1</span>
        <h4>
          <Link to=''>cateName</Link>
        </h4>
      </div>
    </div>
  );
};

export default CardCategory;
