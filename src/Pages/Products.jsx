import React, { useState, useEffect } from "react";
import Banner from "../components/banner/Banner";
import FiterProduct from "../components/product/fiterProduct/FiterProduct";
import ListProduct from "../components/product/listProduct/ListProduct";
import "../style/product.css";
import { dataProduct } from "../data/data.js";
import ProductDetailModel from "../components/model/ProductDetailModel";

import {useDispatch} from "react-redux";
import {addCart} from "../redux/cartSlice"


const Products = ({ setToggleCart }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [productDetail, setProductDetail] = useState({});
  const [openModel, setOpenModel] = useState(false);

  const dispatch = useDispatch()

  useEffect(() => {
    setData(dataProduct);
    setLoading(true);
  }, []);

  const handleDetail = (id) => {
    setOpenModel(true);
    const product = data.find((item) => item.id === id);
    setProductDetail(product);
  };

  const handleAddToCart = (product) => {
    console.log(product);
    const action = addCart(product);
    dispatch(action)
  };
  
  return (
    <>
      <Banner param={"Trang Chủ / Bộ Sưu Tập"} title={"Bộ Sưu Tập"} />
      <section className="product container">
        <div className="product__container grid">
          <FiterProduct />
          {loading ? (
            <ListProduct
              data={data}
              handleDetail={handleDetail}
              setToggleCart={setToggleCart}
            />
          ) : (
            ""
          )}
        </div>
      </section>
      <ProductDetailModel
        productDetail={productDetail}
        openModel={openModel}
        setOpenModel={setOpenModel}
        setProductDetail={setProductDetail}
        handleAddToCart={handleAddToCart}
      />
    </>
  );
};

export default Products;
