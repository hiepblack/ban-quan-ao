import React, { useState } from "react";
import "./detail.css";

const Detailcard = ({ product, handleAddtoCart }) => {

  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");

  const handleadd = () => {
    const newProduct = {
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image.mainImage,
      quantity: quantity,
      color: color,
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
      setColor(e.target.value);
    }
  };

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
            <div className="product__model__color__input">
              {product.size?.map((item) => {
                return (
                  <div className="input__size">
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
            <p>Màu sắc:</p>
            <div className="product__model__color__input">
              {product.color?.map((item) => {
                return (
                  <div className="input__size">
                    <input
                      type="checkbox"
                      id={`size${item}`}
                      value={item}
                      onClick={handleCheckboxColor}
                    />
                    <label htmlFor={`size${item}`}> {item} </label>
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
