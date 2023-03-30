import React, { useState } from "react";
import "./productdetailModel.css";

const ProductDetailModel = ({
  productDetail,
  openModel,
  setOpenModel,
  setProductDetail,
  handleAddToCart,
}) => {
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");

  const handleadd = () => {
    const newProduct = {
      id: productDetail.id,
      name: productDetail.name,
      price: productDetail.price,
      image: productDetail.image.mainImage,
      quantity: quantity,
      color:color,
      size: size,
      totalPrice: quantity * productDetail.price,
    };
    handleAddToCart(newProduct);
    setOpenModel(false);
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
              <div className="input_color">
                {productDetail.color?.map((item) => {
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
              <div className="quantity">
                <button
                  onClick={() => {
                    setQuantity(quantity + 1);
                  }}
                >
                  +
                </button>
                <input type="number" min={1} value={quantity} />
                <button
                  onClick={() =>
                    quantity === 1 ? setQuantity(1) : setQuantity(quantity - 1)
                  }
                >
                  -
                </button>
              </div>
              <div className="btn-sumbit">
                <button type="submit" className="up" onClick={handleadd}>
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
