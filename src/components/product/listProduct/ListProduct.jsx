import React from "react";
import "./listproduct.css";
import CardProducts from "../../cardProduct/CardProducts";

const ListProduct = ({ data,handleFilter }) => {


  return (
    <div className="listproduct">
      <div className="listproduct__header">
        <p>{data.length} sản phẩm</p>
        <div className="listproduct__header__filter">
          <p>Lọc</p>
          <select name="" onChange={(e)=>{handleFilter(e.target.value);}} className="listproduct__header__select">
            <option value="nameAz">Theo tên A-Z</option>
            <option value="nameZa">Theo tên Z-A</option>
            <option value="priceAz">Theo giá tăng dần</option>
            <option value="priceZa">Theo giá giảm dần</option>
          </select>
        </div>
      </div>
      <div className="listproduct__body grid">
        {data.map((product, index) => {
          return (
            <React.Fragment key={index}>
              <CardProducts product={product} />
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default ListProduct;
