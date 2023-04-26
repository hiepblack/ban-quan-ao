import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/cartSlice";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";
// components
import Detailcard from "../components/detail-card/Detailcard";
import Related from "../components/relatedproduct.jsx/Related";
import Banner from "../components/banner/Banner";
import { BASE_URL } from "../helper";

const ProductdetailPage = () => {
  const { setToggleCart } = useContext(AuthContext);
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  let { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(`${BASE_URL}/products/${id}`)
      .then(({ data }) => {
        setProduct(data.product)
        setLoading(false);
      });
  }, [id]);

  const handleAddtoCart = (product) => {
    const action = addCart(product);
    dispatch(action);
    setToggleCart(true);
  };
  return (
    <>
      <Banner param={"Trang Chủ / Chi tiết sản phẩm"} title={product.nameProduct} />
      {loading ? (
        ""
      ) : (
        <>
          <Detailcard product={product} handleAddtoCart={handleAddtoCart} />
          <Related product={product} />
        </>
      )}
    </>
  );
};

export default ProductdetailPage;
