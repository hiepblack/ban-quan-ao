import React from "react";
import "./news.css";
import Title from "../title/Title";
import CardNew from "../cardNews/CardNew";
import { Link } from "react-router-dom";

const News = ({ blog }) => {
  return (
    <section className="container news" data-aos="fade-right">
      <Title
        name={"Tin tức thời trang"}
        desc={"Xu Hướng, Phong Cách Thời Trang Mới Nhất."}
      />
      <div className="news__box grid ">
        {blog?.map((bl) => {
          return (
            <Link to={`/blogDetail/${bl._id}`} key={bl._id}>
              <CardNew bl={bl} />
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default News;
