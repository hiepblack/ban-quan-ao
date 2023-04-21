import React, { useState, useEffect } from "react";
import FilterPrice from "./FilterPrice";
import "./filterproduct.css";
import FilterSize from "./FilterSize";
import FilterCategory from "./FilterCategory";
import axios from "axios";

const FiterProduct = ({ setData ,setLoading}) => {
  const [filter, setFilter] = useState({
    size: "",
    price: "",
    cate: "",
  });
  useEffect(() => {
    setLoading(false)
    axios
      .post(
        `http://localhost:4000/products/filter/?size=${filter.size}&price=${filter.price}`
      )
      .then(({ data }) => {
        setData(data.product);
        setLoading(true)
      });
  }, [filter]);
  return (
    <div className="filter__container">
      <div className="filter__container__box">
        <p>Bộ lọc sản phẩm</p>
        <FilterSize setFilter={setFilter} filter={filter} />
        <FilterPrice setFilter={setFilter} filter={filter} />
        <FilterCategory />
      </div>
    </div>
  );
};

export default FiterProduct;
