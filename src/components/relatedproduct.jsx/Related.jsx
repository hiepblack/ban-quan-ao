import React, { useEffect, useState } from "react";
import CardProducts from "../cardProduct/CardProducts";
import Comment from "./comment/comment";
import Description from "./description/description";
import "./related.css";
import { dataProduct } from "../../data/data";

const Related = ({ product }) => {
  const [show, setShow] = useState(true);
  const [dataRelateProduct, setDataRelateProduct] = useState([]);
  useEffect(() => {
    const data = dataProduct.filter(
      (item) => item.category === product.category
    );
    setDataRelateProduct(data);
  }, [product]);

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
          {dataRelateProduct.map((product, index) => {
            return <CardProducts product={product} key={index}/>;
          })}
        </div>
      </div>
    </div>
  );
};

export default Related;
