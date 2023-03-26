import React, { useEffect, useState } from "react";
import Detailcard from "../components/detail-card/Detailcard";
import Related from "../components/relatedproduct.jsx/Related";
import Banner from "../components/banner/Banner";
import { useParams } from "react-router-dom";
import { dataProduct } from "../data/data.js";

const ProductdetailPage = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  let { id } = useParams();
  console.log(id);

  useEffect(() => {
    const productDetail = dataProduct.find((item) => {
      return item.id === id;
    });
    setProduct(productDetail);
    setLoading(false);
  }, [id]);

  return (
    <>
      <Banner param={"Trang Chủ / Chi tiết sản phẩm"} title={"Sản phẩm 1"} />
      {loading ? (
        ""
      ) : (
        <>
          <Detailcard product={product} />
          <Related product={product} />
        </>
      )}
    </>
  );
};

export default ProductdetailPage;
