import "./blogdetail.css";
import React from "react";
import { motion, useScroll } from "framer-motion";


const BlogdetailContent = ({ blogDetail }) => {
  const { scrollYProgress } = useScroll();
  return (
    <div className="content__blog">
      <div className="content_blogdetail container">
        <motion.div
          className="progress-bar"
          style={{ scaleX: scrollYProgress }}
        />
        <h1>{blogDetail?.title?.toUpperCase()}</h1>
        <header>
          <h2>{blogDetail.description?.[0].header}</h2>
        </header>
        <main>
          {blogDetail.description?.[0].thumbnail.map((d) => {
            return (
              <>
                <img src={d.image} alt="" />
                <p>{d.descImage}</p>
              </>
            );
          })}
        </main>
        <footer>
          <h2>{blogDetail.description?.[0].footer}</h2>
        </footer>
        <p className="content_blogdetail_author">
          Đăng bởi : {blogDetail?.author}/<span>Ngày:20-10-1997</span>
        </p>
      </div>
    </div>
  );
};

export default BlogdetailContent;
