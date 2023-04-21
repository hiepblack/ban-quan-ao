import React, { useState, useEffect } from "react";
import Banner from "../components/banner/Banner";
import FiterProduct from "../components/product/fiterProduct/FiterProduct";
import ListProduct from "../components/product/listProduct/ListProduct";
import "../style/product.css";
import axios from "axios";

const Products = ({ setToggleCart }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleFilter = async (condition) => {
    axios
      .post(`http://localhost:4000/products/sort/?${condition}=1`)
      .then(({ data }) => {
        setData(data.products);
        setLoading(true);
      });
  };

  useEffect(() => {
    axios.get(`http://localhost:4000/products/`).then(({ data }) => {
      setData(data.products);
      setLoading(true);
    });
  }, []);

  return (
    <>
      <Banner param={"Trang Chủ / Bộ Sưu Tập"} title={"Bộ Sưu Tập"} />
      <section className="product container">
        <div className="product__container grid">
          <FiterProduct setData={setData} setLoading={setLoading}/>
          {loading ? (
            <ListProduct
              data={data}
              setToggleCart={setToggleCart}
              handleFilter={handleFilter}
            />
          ) : (
            <div className="product__loading">
              <div class="lds-facebook">
                <div></div>
                <div></div>
                <div></div>
              </div>
              Loading...
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Products;
