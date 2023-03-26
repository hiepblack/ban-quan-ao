import React from "react";
import "./productdetailModel.css";

const ProductDetailModel = ({ productDetail, openModel, setOpenModel }) => {
  console.log(productDetail);
  return (
    <div
      className={openModel ? "product__model active-modal" : "product__model"}
    >
      <div className="product__model__content">
        <div
          className="product__model__close"
          onClick={() => setOpenModel(false)}
        >
          X
        </div>
        <div className="product__model__detail">
          
          <div className="product__model_img">
            <div className="product__model__main">
              <img src={productDetail.image?.mainImage} alt="" />
            </div>
            <div className="product__model__slide">
              {productDetail.image?.slideImage?.map((img) => {
                return <img src={img} alt="" />;
              })}
            </div>
          </div>

          <div className="product__model_desc">
            <div className="content-deltail">
              <h1>{productDetail.name?.toUpperCase()}</h1>
              <p className="price">{productDetail.price}₫</p>
              <p>THƯƠNG HIỆU: {productDetail.brand}</p>
            </div>
            <div>
              <p>Kích thước:</p>
              <div className="btn-size">
                {productDetail?.size?.map((item) => {
                  return <button className="btn">Size {item}</button>;
                })}
              </div>
              <p>Màu sắc:</p>
              <div className="input_color">
                {productDetail.color?.map((item) => {
                  return (
                    <>
                      <input type="checkbox" name="" id="" />{" "}
                      <span>{item}</span>
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
    </div>
  );
};

export default ProductDetailModel;
