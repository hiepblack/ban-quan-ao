import React from "react";
import FilterPrice from "./FilterPrice";
import "./filterproduct.css";
import FilterSize from "./FilterSize";
import FilterCategory from "./FilterCategory";

const FiterProduct = () => {
  return (
    <div className="filter__container">
      <div className="filter__container__box">
      <p>Bộ lọc sản phẩm</p>
      <FilterSize />
      <FilterPrice/>
      <FilterCategory />
      </div>
    </div>
  );
};

export default FiterProduct;
