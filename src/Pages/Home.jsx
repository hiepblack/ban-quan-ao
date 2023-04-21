import React, { useEffect, useState } from "react";
import axios from "axios";
import Slide from "../components/slideshow/Slide";
import Hot_Collect from "../components/hot-collects/Hot_Collect";
import New_Product from "../components/newProduct/New_Product";
import News from "../components/news/News";
import CollectBanner from "../components/collect-banner/CollectBanner";
import AOS from "aos";

const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:4000/products/`).then(({ data }) => {
      setData(data.products);
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
      <Hot_Collect />
      <New_Product data={data} />
      <CollectBanner />
      <News />
    </>
  );
};

export default Home;
