import React, { useState } from "react";

const FilterCategory = () => {
  const [toggleCate, setToggleCate] = useState(true);
  return (
    <div className="filter__size">
      <div
        className="filter__size__header"
        onClick={() => setToggleCate(!toggleCate)}
      >
        <p>Loại sản phẩm</p>
        <span className={toggleCate ? "rotateX" : "rotateY"}>
          <i class="uil uil-angle-down"></i>
        </span>
      </div>
      <div
        className={
          toggleCate ? "filter__size__body" : "filter__size__body show_body"
        }
      >
        <ul>
          <li>
            <a href="">
              <span className="check__mark">Khác</span>
            </a>
          </li>
          <li>
            <a href="">
              <span className="check__mark">Quần</span>
            </a>
          </li>
          <li>
            <a href="">
              <span className="check__mark">Áo</span>
            </a>
          </li>
          <li>
            <a href="">
              <span className="check__mark">Váy</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FilterCategory;
