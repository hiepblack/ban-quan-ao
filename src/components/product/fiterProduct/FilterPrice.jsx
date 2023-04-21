import React, { useState } from "react";

const FilterPrice = ({ setFilter, filter }) => {
  const [togglePrice, setTogglePrice] = useState(true);

  const handleClick = (e) => {
    setFilter((pre) => {
      return {
        ...pre,
        price: e.target.value,
      };
    });
  };

  return (
    <div className="filter__size">
      <div
        className="filter__size__header"
        onClick={() => setTogglePrice(!togglePrice)}
      >
        <p>Giá sản phẩm</p>
        <span className={togglePrice ? "rotateX" : "rotateY"}>
          <i class="uil uil-angle-down"></i>
        </span>
      </div>
      <div
        className={
          togglePrice ? "filter__size__body" : "filter__size__body show_body"
        }
      >
        <ul>
          <li className="filter__size__li">
            <input
              type="radio"
              name="a"
              id=""
              value={"0 - 500000"}
              onClick={handleClick}
            />
            <span className="check__mark">Dưới 500.000</span>
          </li>
          <li className="filter__size__li">
            <input
              type="radio"
              name="a"
              id=""
              value={"500000 - 600000"}
              onClick={handleClick}
            />
            <span>500.000 - 600.000</span>
          </li>
          <li className="filter__size__li">
            <input
              type="radio"
              name="a"
              id=""
              value={"600000 - 700000"}
              onClick={handleClick}
            />
            <span>600.000-700.000</span>
          </li>
          <li className="filter__size__li">
            <input
              type="radio"
              name="a"
              id=""
              value={"700000 - 0"}
              onClick={handleClick}
            />
            <span>Trên 700.000</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FilterPrice;
