import React, { useEffect, useState } from "react";
import Slide from "../components/slideshow/Slide";
import Hot_Collect from "../components/hot-collects/Hot_Collect";
import New_Product from "../components/newProduct/New_Product";
import News from "../components/news/News";
import axios from "axios"

const Home = () => {
  const [data,setData] = useState([])
  useEffect(()=>{
    axios.get(`http://localhost:4000/products/`).then(({data})=>{setData(data.products)})
  },[])
  return (
    <>
      <Slide />
      <Hot_Collect />
      <New_Product data={data}/>
      <News />
    </>
  );
};

export default Home;
