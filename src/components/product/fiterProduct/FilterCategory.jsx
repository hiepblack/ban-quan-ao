import React, { useState } from "react";
import { Link } from "react-router-dom";

const FilterCategory = ({setCate}) => {
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
            <Link to="">
              <span className="check__mark">Khác</span>
            </Link>
          </li>
          <li>
            <Link to="">
              <span className="check__mark">Quần</span>
            </Link>
          </li>
          <li>
            <Link to="">
              <span className="check__mark">Áo</span>
            </Link>
          </li>
          <li>
            <Link to="">
              <span className="check__mark">Váy</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FilterCategory;
