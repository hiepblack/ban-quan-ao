import React, { useEffect, useState, useContext } from "react";
import CardProducts from "../cardProduct/CardProducts";
import Comment from "./comment/comment";
import Description from "./description/description";
import "./related.css";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";
import { toast } from "react-toastify";
import { BASE_URL } from "../../helper";

const Related = ({ product }) => {
  const { user } = useContext(AuthContext);
  console.log(user);
  const [show, setShow] = useState(true);
  const [dataRelateProduct, setDataRelateProduct] = useState([]);
  const [datacmt, setDataCmt] = useState({
    textComment: undefined,
    username: user?.userName || "vo danh",
    image: user?.image || "https://picsum.photos/200/300",
    prouductId: product._id,
  });

  useEffect(() => {
    const dataProduct = async () => {
      await axios.get(`${BASE_URL}/products/`).then(({ data }) => {
        const datafilter = data.products.docs.filter(
          (item) => item.categoryId._id === product.categoryId._id
        );
        console.log(product.categoryId._id);
        let datafilterProducts = [];
        datafilter.forEach((item) => {
          if (item._id !== product._id) {
            datafilterProducts.push(item);
          }
        });
        setDataRelateProduct(datafilterProducts);
      });
    };
    dataProduct();
    window.scrollTo(0, 0);
  }, [product]);

  const handlecomment = async () => {
    console.log(datacmt);
    const res = await fetch(`${BASE_URL}/comment/${product._id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(datacmt),
    });
    const data = await res.json();
    if (data.successfull) {
      toast.success(data.message);
      product.comments.push(data.comment);
    }
    setDataCmt((pre) => {
      return {
        ...pre,
        textComment: "",
      };
    });
  };
  return (
    <div className="related container">
      <div className="description">
        <div className="nav__item_list">
          <p
            onClick={() => {
              setShow(true);
            }}
          >
            Mô tả sản phẩm
          </p>
          <p
            onClick={() => {
              setShow(false);
            }}
          >
            Review sản phẩm
          </p>
        </div>
        <div>
          {show ? (
            <Description />
          ) : (
            <Comment
              product={product}
              handlecomment={handlecomment}
              datacmt={datacmt}
              setDataCmt={setDataCmt}
            />
          )}
        </div>
      </div>
      <div className="related__products">
        <p>Sản phẩm liên quan</p>
        <div className="card-related">
          {dataRelateProduct.map((product, index) => {
            return <CardProducts product={product} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Related;
