import React from "react";
import Detailcard from "../components/detail-card/Detailcard";
import Related from "../components/relatedproduct.jsx/Related";
import Banner from "../components/banner/Banner";

const ProductdetailPage = () => {
  return (
    <>
      <Banner param={"Trang Chủ / Chi tiết sản phẩm"} title={"Sản phẩm 1"} />
      <Detailcard />
      <Related />
    </>
  );
};

export default ProductdetailPage;
