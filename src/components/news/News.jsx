import React from "react";
import "./news.css";
import Title from "../title/Title";
import CardNew from "../cardNews/CardNew";

const News = () => {
  return (
    <section className="container news">
      <Title name={"Tin tức thời trang"} />
      <div className="news__box grid ">
        <CardNew/>
        <CardNew/>
        <CardNew/>
        <CardNew/>
      </div>
    </section>
  );
};

export default News;
