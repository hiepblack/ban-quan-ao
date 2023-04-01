import React from "react";
import FilterPrice from "./FilterPrice";
import "./filterproduct.css";
import FilterSize from "./FilterSize";
import FilterCategory from "./FilterCategory";

const FiterProduct = ({handleSize}) => {
  return (
    <div className="filter__container">
      <div className="filter__container__box">
        <p>Bộ lọc sản phẩm</p>
        <FilterSize handleSize={handleSize} />
        <FilterPrice handleSize={handleSize}/>
        <FilterCategory handleSize={handleSize}/>
      </div>
    </div>
  );
};

export default FiterProduct;
