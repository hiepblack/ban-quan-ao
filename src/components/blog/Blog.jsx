import React from "react";
import CardNew from "../cardNews/CardNew";
import "./blog.css";
import { Link } from "react-router-dom";

const Blog = ({ blogs }) => {
  return (
    <>
      {blogs.map((bl) => (
        <Link to={`/blogDetail/${bl._id}`} key={bl._id}>
          <CardNew bl={bl} />
        </Link>
      ))}
    </>
  );
};

export default Blog;
