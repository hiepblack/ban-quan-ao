import React from "react";
import "./detail.css";
const Detailcard = ({ product }) => {
  console.log(product);
  return (
    <div className="container">
      <div className="container-detail">
        <div className="image-product">
          <div className="thumbnail">
            {product?.image.slideImage.map((img) => {
              return <img src={img} alt="" />;
            })}
          </div>
          <div className="large-image">
            <img src={product.image.mainImage} alt="" />
          </div>
        </div>
        <div className="detail-product">
          <div className="content-deltail">
            <h1>{product.name}</h1>
            <p className="price">{product.price}₫</p>
            <p>THƯƠNG HIỆU: {product.brand}</p>
          </div>
          <div>
            <p>Kích thước:</p>
            <div className="btn-size">
              {product?.size.map((item) => {
                return <button className="btn">Size {item}</button>;
              })}
            </div>
            <p>Màu sắc:</p>
            <div className="input_color">
              {product.color.map((item) => {
                return (
                  <>
                    <input type="checkbox" name="" id="" /> <span>{item}</span>
                  </>
                );
              })}
            </div>
            <p>Số lượng:</p>
            <div className="quantity">
              <input type="number" min={0} defaultValue={1} />
            </div>
            <div className="btn-sumbit">
              <button type="submit" className="up">
                THÊM VÀO GIỎ HÀNG
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detailcard;
