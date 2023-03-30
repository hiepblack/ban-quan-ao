import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {useDispatch} from 'react-redux';
import {addCart} from '../redux/cartSlice'

// data fake
import { dataProduct } from "../data/data.js";
// components
import Detailcard from "../components/detail-card/Detailcard";
import Related from "../components/relatedproduct.jsx/Related";
import Banner from "../components/banner/Banner";

const ProductdetailPage = () => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  let { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    const productDetail = dataProduct.find((item) => {
      return item.id === id;
    });
    setProduct(productDetail);
    setLoading(false);
  }, [id]);

  const handleAddtoCart = (product) => {
    const action = addCart(product);
    dispatch(action);
  };
  return (
    <>
      <Banner param={"Trang Chủ / Chi tiết sản phẩm"} title={product.name} />
      {loading ? (
        ""
      ) : (
        <>
          <Detailcard product={product} handleAddtoCart={handleAddtoCart}/>
          <Related product={product} />
        </>
      )}
    </>
  );
};

export default ProductdetailPage;
