import React, { useState, useEffect } from "react";
import Banner from "../components/banner/Banner";
import FiterProduct from "../components/product/fiterProduct/FiterProduct";
import ListProduct from "../components/product/listProduct/ListProduct";
import "../style/product.css";
import axios from "axios";
import { BASE_URL } from "../helper";
import Paginate from "../components/paginate/Paginate";

const Products = ({ setToggleCart }) => {
  const [data, setData] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);

  const handleFilter = async (condition) => {
    const newArr = condition.split("-");
    axios
      .get(`${BASE_URL}/products/?sort=${newArr[0]}&order=${newArr[1]}`)
      .then(({ data }) => {
        setData(data.products.docs);
      });
  };

  useEffect(() => {
    axios.get(`${BASE_URL}/products/?limit=9&page=${page+1}`).then(({ data }) => {
      setData(data.products.docs);
      setLoading(true);
      setPageCount(data.products.totalPages);
    });
    window.scrollTo(0, 0);
  }, [page]);

  return (
    <>
      <Banner param={"Trang Chủ / Bộ Sưu Tập"} title={"Bộ Sưu Tập"} />
      <section className="product container">
        <div className="product__container grid">
          <FiterProduct setData={setData} setLoading={setLoading} />
          {loading ? (
            <div>
              <ListProduct
                data={data}
                setToggleCart={setToggleCart}
                handleFilter={handleFilter}
              />
              <div className="product__paginate">
                <Paginate pageCount={pageCount} setPage={setPage} page={page}/>
              </div>
            </div>
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
