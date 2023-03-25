import React from "react";
import FilterPrice from "./FilterPrice";
import "./filterproduct.css";
import FilterSize from "./FilterSize";
import FilterCategory from "./FilterCategory";

const FiterProduct = () => {
  return (
    <div className="filter__container">
      <div className="filter__container__box">
      <h2>BỘ LỌC SẢN PHẨM</h2>
      <FilterSize />
      <FilterPrice/>
      <FilterCategory />
      </div>
    </div>
  );
};

export default FiterProduct;
