import React, { useEffect, useState } from "react";
import Banner from "../components/banner/Banner";
import BlogContent from "../components/blog/Blog";
import Listcate from "../components/blog/Listcate";
import axios from "axios";
import { BASE_URL } from "../helper";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [categoryBlog, setCategoryBlog] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    axios.get(`${BASE_URL}/blog/`).then(({ data }) => {
      setBlogs(data.blogs);
      setLoading(true)
    });
    axios.get(`${BASE_URL}/cateblog/`).then(({ data }) => {
      setCategoryBlog(data.cates);
    });
  }, []);
  const handleBlog = (id) => {
    setLoading(false);
    axios.get(`${BASE_URL}/blog/`).then(({ data }) => {
      const newBlog = data.blogs.filter((ft) => ft.cateBlogId._id === id);
      setBlogs(newBlog);
      setLoading(true)
    });
  };
  return (
    <div className="">
      <Banner param={"Trang Chủ / Tin Tức"} title={"Tin Tức"} />
      <Listcate categoryBlog={categoryBlog} handleBlog={handleBlog} />
      {loading ? (
        <div className="content_blog container">
          <BlogContent blogs={blogs} />
        </div>
      ) : (
        <div className="product__loading blog">
          <div class="lds-facebook">
            <div></div>
            <div></div>
            <div></div>
          </div>
          Loading...
        </div>
      )}
    </div>
  );
};

export default Blog;
