import React, { useState, useEffect } from "react";
import Banner from "../components/banner/Banner";
import BlogdetailContent from "../components/blogdetail/blogdetail";
import axios from "axios";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../helper";
import Breadcrumb from "../components/breadcrumbs/Breadcrumb";


const Blogdetail = () => {
  const [blogDetail, setBlogDetail] = useState([]);
 
  const { id } = useParams();
  useEffect(() => {
    axios.get(`${BASE_URL}/blog/${id}`).then(({data}) => {
      setBlogDetail(data.blog)
      console.log(data.blog);
    });
  }, [id]);
  const data = {
    namePage:'BlogDetail',
    url:'/blogDetail',
    blog: blogDetail.title
  }
  
  return (
    <>
      <Banner param={"Trang chủ/Tin tức"} title={"Tin tức"} />
      <Breadcrumb data={data}/>
      <BlogdetailContent blogDetail={blogDetail}/>
    </>
  );
};

export default Blogdetail;
