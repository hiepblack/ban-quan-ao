import React, { useState } from "react";

const FilterSize = ({ setSize }) => {
  const [toggleSize, setToggleSize] = useState(true);
  const size = ["M", "L", "XL"];

  const handleclick = (e) => {
      setSize(e.target.value)
  }
  return (
    <div className="filter__size">
      <div
        className="filter__size__header"
        onClick={() => setToggleSize(!toggleSize)}
      >
        <p>Kích thước</p>
        <span className={toggleSize ? "rotateX" : "rotateY"}>
          <i class="uil uil-angle-down"></i>
        </span>
      </div>
      <div
        className={
          toggleSize ? "filter__size__body" : "filter__size__body show_body"
        }
      >
        <ul>
          {size.map((item, index) => {
            return (
              <li key={index}>
                <input
                  type="radio"
                  value={item}
                  onClick={handleclick}
                  name="item"
                />
                <span className="check__mark">Size {item}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default FilterSize;
