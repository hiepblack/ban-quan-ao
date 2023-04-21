import React, { useState } from "react";
import "./detail.css";
import ProductDetailsCarousel from "./ProductDetailCarousel";

const Detailcard = ({ product, handleAddtoCart }) => {
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState("M");
  const [color, setColor] = useState("black");

  const handleadd = () => {
    const newProduct = {
      _id: product._id,
      nameProduct: product.nameProduct,
      price: product.price,
      imgProduct: product?.imgProduct[0],
      quantity: quantity,
      colors: color,
      size: size,
      totalPrice: quantity * product.price,
    };
    handleAddtoCart(newProduct);
  };
  const handleCheckboxSize = (e) => {
    if (e.target.checked) {
      setSize(e.target.value);
    }
  };
  const handleCheckboxColor = (e) => {
    if (e.target.checked) {
      console.log(e.target.value);
      setColor(e.target.value);
    }
  };

  return (
    <div className="container">
      <div className="container-detail">
        <div className="box__carousel">
          <ProductDetailsCarousel product={product} />
        </div>
        <div className="detail-product">
          <div className="content-deltail">
            <h1>{product.nameProduct}</h1>
            <p className="price">{product.price}₫</p>
            <p>THƯƠNG HIỆU: {product.brand}</p>
          </div>

          <div>
            <p>Kích thước: {size}</p>
            <div className="product__model__color__input">
              {product.size?.map((item, index) => {
                return (
                  <div className="input__size" key={index}>
                    <input
                      type="checkbox"
                      id={`size${item}`}
                      value={item}
                      onClick={handleCheckboxSize}
                    />
                    <label htmlFor={`size${item}`}>Size {item}</label>
                  </div>
                );
              })}
            </div>
            <p>Màu sắc: {color} </p>
            <div className="product__model__color__input">
              {product.colors?.map((item, index) => {
                return (
                  <div className="input__size" key={index}>
                    <div className="box" style={{ backgroundColor: `${item}` }}>
                      <input
                        type="radio"
                        id={`size${item}`}
                        value={item}
                        onClick={handleCheckboxColor}
                        name="color"
                      />
                      <label
                        className="box-lable"
                        htmlFor={`size${item}`}
                      ></label>
                    </div>
                  </div>
                );
              })}
            </div>
            <p>Số lượng:</p>
            <div className="product__model__quantity__btn">
              <button
                onClick={() =>
                  quantity === 1 ? setQuantity(1) : setQuantity(quantity - 1)
                }
              >
                -
              </button>
              <input type="number" min={1} value={quantity} />
              <button
                onClick={() => {
                  setQuantity(quantity + 1);
                }}
              >
                +
              </button>
            </div>
            <div className="btn-sumbit" onClick={handleadd}>
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
