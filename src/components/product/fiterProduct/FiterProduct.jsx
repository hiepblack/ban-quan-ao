import React from "react";
import FilterPrice from "./FilterPrice";
import "./filterproduct.css";
import FilterSize from "./FilterSize";
import FilterCategory from "./FilterCategory";

const FiterProduct = () => {
  return (
    <div className="filter__container">
      <h2>BỘ LỌC SẢN PHẨM</h2>
      <FilterSize />
      <FilterPrice/>
      <FilterCategory />
    </div>
  );
};

export default FiterProduct;
