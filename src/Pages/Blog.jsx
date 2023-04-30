import React, { useEffect, useState } from "react";
import Banner from "../components/banner/Banner";
import BlogContent from "../components/blog/Blog";
import Listcate from "../components/blog/Listcate";
import axios from "axios";
import { BASE_URL } from "../helper";
import Paginate from "../components/paginate/Paginate";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [categoryBlog, setCategoryBlog] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);

  useEffect(() => {
    axios.get(`${BASE_URL}/blog/?&page=${page+1}`).then(({ data }) => {
      setBlogs(data.blogs.docs);
      setLoading(true)
      setPageCount(data.blogs.totalPages);
    });
    axios.get(`${BASE_URL}/cateblog/`).then(({ data }) => {
      setCategoryBlog(data.cates);
    });
    window.scrollTo(0, 0);
  }, [page]);
  const handleBlog = (id) => {
    setLoading(false);
    axios.get(`${BASE_URL}/blog/?limit=10`).then(({ data }) => {
      const newBlog = data.blogs.docs.filter((ft) => ft.cateBlogId._id === id);
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
      <div className="content_blog container list_categorys">
      <Paginate pageCount={pageCount} setPage={setPage} page={page}/>
      </div>
    </div>
  );
};

export default Blog;
