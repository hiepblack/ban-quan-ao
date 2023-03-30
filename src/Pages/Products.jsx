import React, { useState, useEffect } from "react";
import Banner from "../components/banner/Banner";
import FiterProduct from "../components/product/fiterProduct/FiterProduct";
import ListProduct from "../components/product/listProduct/ListProduct";
import "../style/product.css";
import { dataProduct } from "../data/data.js";
import ProductDetailModel from "../components/model/ProductDetailModel";

const Products = ({setToggleCart}) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [productDetail, setProductDetail] = useState({});
  const [openModel, setOpenModel] = useState(false);

  useEffect(() => {
    setData(dataProduct);
    setLoading(true);
  }, []);
  const handleDetail = (id) => {
    setOpenModel(true)
    const product = data.find((item) => item.id === id);
    setProductDetail(product);
  };
  return (
    <>
      <Banner param={"Trang Chủ / Bộ Sưu Tập"} title={"Bộ Sưu Tập"} />
      <section className="product container">
        <div className="product__container grid">
          <FiterProduct />
          {loading ? (
            <ListProduct data={data} handleDetail={handleDetail} setToggleCart={setToggleCart}/>
          ) : (
            ""
          )}
        </div>
      </section>
      <ProductDetailModel
        productDetail={productDetail}
        openModel={openModel}
        setOpenModel={setOpenModel}
      />
    </>
  );
};

export default Products;
