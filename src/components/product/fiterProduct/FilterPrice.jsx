import React, { useState } from "react";

const FilterPrice = () => {
  const [togglePrice, setTogglePrice] = useState(true);
  return (
    <div className="filter__size">
      <div className="filter__size__header">
        <h3>Giá sản phẩm</h3>
        <span
          className={togglePrice ? "rotateX" : "rotateY"}
          onClick={() => setTogglePrice(!togglePrice)}
        >
          <i class="uil uil-angle-down"></i>
        </span>
      </div>
      <div
        className={
          togglePrice ? "filter__size__body" : "filter__size__body show_body"
        }
      >
        <ul>
          <li>
            <a href="">
              <input type="checkbox" name="" id="" />
              <span className="check__mark">Dưới 500.000</span>
            </a>
          </li>
          <li>
            <a href="">
              <input type="checkbox" name="" id="" />
              <span>500.000 - 600.000</span>
            </a>
          </li>
          <li>
            <a href="">
              <input type="checkbox" name="" id="" />
              <span>600.000-700.000</span>
            </a>
          </li>
          <li>
            <a href="">
              <input type="checkbox" name="" id="" />
              <span>Trên 700.000</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FilterPrice;
