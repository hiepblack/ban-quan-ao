import React from "react";
import Slide from "../components/slideshow/Slide";
import Hot_Collect from "../components/hot-collects/Hot_Collect";
import New_Product from "../components/newProduct/New_Product";
import News from "../components/news/News";

const Home = () => {
  return (
    <>
      <Slide />
      <Hot_Collect />
      <New_Product />
      <News />
    </>
  );
};

export default Home;
