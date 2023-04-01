import React, { useState, useEffect } from "react";
import FilterPrice from "./FilterPrice";
import "./filterproduct.css";
import FilterSize from "./FilterSize";
import FilterCategory from "./FilterCategory";
import axios from "axios";

const FiterProduct = ({ setData }) => {
  const [price, setPrice] = useState();
  const [size, setSize] = useState();
  const [cate, setCate] = useState();

  useEffect(() => {
    const handleSize = async () => {
      if (size) {
        await axios
          .post(`http://localhost:4000/products/filter/?size=${size}`)
          .then(({ data }) => setData(data.product));
      }
      if (price) {
        await axios
          .post(`http://localhost:4000/products/filter/?price=${price}`)
          .then(({ data }) => setData(data.product));
      }
      if (price && size) {
        await axios
          .post(
            `http://localhost:4000/products/filter/?price=${price}&size=${size}`
          )
          .then(({ data }) => setData(data.product));
      }
    };
    handleSize();
  }, [price, size]);
  return (
    <div className="filter__container">
      <div className="filter__container__box">
        <p>Bộ lọc sản phẩm</p>
        <FilterSize setSize={setSize} />
        <FilterPrice setPrice={setPrice} />
        <FilterCategory setCate={setCate} />
      </div>
    </div>
  );
};

export default FiterProduct;
