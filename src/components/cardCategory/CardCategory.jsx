import React from "react";
import "./cardcategory.css";
import { Link } from "react-router-dom";
import img from "../../assets/home1.webp"

const CardCategory = (props) => {
  return (
    <div className="product-card">
      <div className="product__img">
          <img src={props.item?.image} alt="" />
          <div className="product__img__btn">
            <button >Xem Nhanh</button>
          </div>
      </div>
      <div className="product-details">
        <h4>
          <Link to='/product'>{props.item?.nameCategory}</Link>
        </h4>
      </div>
    </div>
  );
};

export default CardCategory;
