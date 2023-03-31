import React, { useState, useEffect } from "react";
import Banner from "../components/banner/Banner";
import FiterProduct from "../components/product/fiterProduct/FiterProduct";
import ListProduct from "../components/product/listProduct/ListProduct";
import "../style/product.css";
import { dataProduct } from "../data/data.js";




const Products = ({ setToggleCart }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setData(dataProduct);
    setLoading(true);
  }, []);

  return (
    <>
      <Banner param={"Trang Chủ / Bộ Sưu Tập"} title={"Bộ Sưu Tập"} />
      <section className="product container">
        <div className="product__container grid">
          <FiterProduct />
          {loading ? (
            <ListProduct
              data={data}
              setToggleCart={setToggleCart}
            />
          ) : (
            ""
          )}
        </div>
      </section>
    </>
  );
};

export default Products;
