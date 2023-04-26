import React, { useEffect, useState } from "react";
import axios from "axios";
import Slide from "../components/slideshow/Slide";
import HotCollect from "../components/hot-collects/Hot_Collect";
import NewProduct from "../components/newProduct/New_Product";
import News from "../components/news/News";
import CollectBanner from "../components/collect-banner/CollectBanner";
import AOS from "aos";
import { BASE_URL } from "../helper";

const Home = () => {
  const [data, setData] = useState([]);
  const [blog, setBlog] = useState([]);
  useEffect(() => {
    axios.get(`${BASE_URL}/products/?limit=10`).then(({ data }) => {
      setData(data.products.docs);
    });
    axios.get(`${BASE_URL}/blog/`).then(({ data }) => {
      setBlog(data.blogs);
    });
  }, []);
  window.addEventListener("scroll", function () {
      AOS.init({
        duration: 1200,
      });
  }); 
  return (
    <>
      <Slide />
      <HotCollect />
      <NewProduct data={data} />
      <CollectBanner />
      <News blog={blog}/>
    </>
  );
};

export default Home;
