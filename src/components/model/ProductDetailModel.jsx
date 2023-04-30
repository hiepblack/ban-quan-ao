import React, { useState, useContext, useEffect } from "react";
import "./productdetailModel.css";
import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addCart } from "../../redux/cartSlice";
import axios from "axios";
import { toast } from "react-toastify";
import {BASE_URL} from '../../helper'

const ProductDetailModel = () => {
  const { openModelDetail, setOpenModelDetail, productId, setToggleCart } =
    useContext(AuthContext);
  const dispatch = useDispatch();

  const [productDetail, setProductDetail] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");

  useEffect(() => {
    const productDetail = async () => {
      await axios
        .get(`${BASE_URL}/products/${productId}`)
        .then(({ data }) => setProductDetail(data.product));
    };
    productDetail()
  }, [productId]);

  const handleadd = () => {
    const newProduct = {
      _id: productDetail._id,
      nameProduct: productDetail.nameProduct,
      price: productDetail.price,
      imgProduct: productDetail.imgProduct[0],
      quantity: quantity,
      colors: color,
      size: size,
      totalPrice: quantity * productDetail.price,
    };
    if(!newProduct.colors || !newProduct.size){
      toast.error('Size or Color not empty')
      return
    }
    const action = addCart(newProduct);
    dispatch(action);
    setToggleCart(true);
    setOpenModelDetail(false);
    toast.success('Add product to Cart successfully')
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
              <img src={productDetail?.imgProduct?.[0]} alt="" />
            </div>
            <div className="product__model__price">
              <h1>{productDetail?.nameProduct?.toUpperCase()}</h1>
              <p className="price">{productDetail?.price}₫</p>
              <p>Thương hiệu : {productDetail?.brand}</p>
            </div>
          </div>

          <div className="product__model_desc">
            <div className="product__model__color">
              <p>Màu sắc:</p>
              <div className="product__model__color__input">
                {productDetail?.colors?.map((item) => {
                  return (
                    <div className="input__size">
                      <div className="box" style={{backgroundColor:`${item}`}}>

                      <input
                        type="radio"
                        id={`size${item}`}
                        value={item}
                        onClick={handleCheckboxColor}
                        name="color"
                        />
                      <label htmlFor={`size${item}`} className="box-lable">  </label>
                        </div>
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
              <Link to={`/productDetail/${productDetail?._id}`}>
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
