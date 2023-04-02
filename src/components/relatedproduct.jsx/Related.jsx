import React, { useEffect, useState, useContext } from "react";
import CardProducts from "../cardProduct/CardProducts";
import Comment from "./comment/comment";
import Description from "./description/description";
import "./related.css";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";
import {toast} from "react-toastify"

const Related = ({ product }) => {
  const { user } = useContext(AuthContext);
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
      await axios.get(`http://localhost:4000/products/`).then(({ data }) => {
        const datafilter = data.products.filter(
          (item) => item.categoryId._id === product.categoryId._id
        );
        setDataRelateProduct(datafilter);
      });
    };
    dataProduct();
    window.scrollTo(0, 0);
  }, [product]);

  const handlecomment = async () => {
    console.log(datacmt);
    const res = await fetch(`http://localhost:4000/comment/${product._id}`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(datacmt),
    });
    const data = await res.json();
    if(data.successfull){
      toast.success(data.message);
      product.comments.push(data.comment);
    }

    console.log(data);
    // await axios
    //   .post(`http://localhost:4000/comment/${product._id}`, {
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     data: datacmt,
    //   })
    //   .then(({ data }) => {
    //     console.log(data.comment);
    //   });
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
