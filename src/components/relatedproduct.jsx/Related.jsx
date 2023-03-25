import React, { useState } from "react";
import { Link } from "react-router-dom";
import CardProducts from "../cardProduct/CardProducts";
import Comment from "./comment/comment";
import Description from "./description/description";
import "./related.css";

const Related = () => {
  const [show, setShow] = useState(true);
  return (
    <div className="related container">
      <div className="description">
        <div className="nav__item_list">
          <p
            onClick={() => {
              setShow(!show);
            }}
          >
            Mô tả sản phẩm
          </p>
          <p
            onClick={() => {
              setShow(!show);
            }}
          >
            Review sản phẩm
          </p>
        </div>
        <div>{show ? <Description /> : <Comment />}</div>
      </div>
      <div className="related__products">
        <p>Sản phẩm liên quan</p>
        <div className="card-related">
          <CardProducts />
          <CardProducts />
          <CardProducts />
          <CardProducts />
        </div>
      </div>
    </div>
  );
};

export default Related;
