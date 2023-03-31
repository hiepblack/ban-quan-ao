import React, { useState, useContext, useEffect } from "react";
import "./productdetailModel.css";
import { AuthContext } from "../../context/AuthContext";
import { dataProduct } from "../../data/data";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addCart } from "../../redux/cartSlice";

const ProductDetailModel = () => {
  const { openModelDetail, setOpenModelDetail, productId,setToggleCart } =
    useContext(AuthContext);
    const dispatch = useDispatch();

  const [productDetail, setProductDetail] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");



  useEffect(() => {
    const product = dataProduct.find((item) => item.id === productId);
    setProductDetail(product);
  }, [productId]);

  const handleadd = () => {
    const newProduct = {
      id: productDetail.id,
      name: productDetail.name,
      price: productDetail.price,
      image: productDetail.image.mainImage,
      quantity: quantity,
      color: color,
      size: size,
      totalPrice: quantity * productDetail.price,
    };
    const action = addCart(newProduct);
    dispatch(action);
    setToggleCart(true);
    setOpenModelDetail(false);
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
      className={
        openModelDetail ? "product__model active-modal" : "product__model"
      }
    >
      <div className="product__model__content">
        <div className="product__model__close">
          <p>CHỌN KIỂU SẢN PHẨM</p>
          <p onClick={() => setOpenModelDetail(false)}>
            <i class="uil uil-times"></i>
          </p>
        </div>
        <div className="product__model__detail">
          <div className="product__model_img">
            <div className="product__model__main">
              <img src={productDetail?.image?.mainImage} alt="" />
            </div>
            <div className="product__model__price">
              <h1>{productDetail?.name?.toUpperCase()}</h1>
              <p className="price">{productDetail?.price}₫</p>
              <p>Thương hiệu : {productDetail?.brand}</p>
            </div>
          </div>

          <div className="product__model_desc">
            <div className="product__model__color">
              <p>Màu sắc:</p>
              <div className="product__model__color__input">
                {productDetail?.color?.map((item) => {
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
            </div>

            <div className="product__model__color">
              <p>Kích thước:</p>
              <div className="product__model__color__input">
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
            </div>
            <div className="product__model__quantity">
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
            </div>

            <div className="btn-sumbit">
              <button type="submit" className="up" onClick={handleadd}>
                THÊM VÀO GIỎ HÀNG
              </button>
            </div>
            <p className="product__model__link">
              <Link to={`/productDetail/${productDetail?.id}`}>
                Xem chi tiết sản phẩm
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailModel;
