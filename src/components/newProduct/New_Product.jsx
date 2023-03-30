import React from "react";
import "./newproduct.css";
import Title from "../title/Title";
import CardProducts from "../cardProduct/CardProducts";
import { dataProduct } from "../../data/data.js";

const New_Product = () => {
  return (
    <section className="container newproduct">
      <Title name={"Top 10 Sản phẩm bán chạy nhất"} desc={'Đón Đầu Xu Hướng Định Hình Phong Cách'}/>
      <div className="collect__gallery">
        {dataProduct.map((product,index) => {
          return (
            <React.Fragment key={index}>
              <CardProducts product={product} />
            </React.Fragment>
          )
        })}
      </div>
    </section>
  );
};

export default New_Product;
