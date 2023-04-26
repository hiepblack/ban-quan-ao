import React from "react";
import "./listcate.css";

const Listcate = ({ categoryBlog,handleBlog }) => {
  const newCategory = categoryBlog.slice(1);
  const handleChange = (id) => {
    handleBlog(id)
  }
  return (
    <div className="list_categorys container">
      <div>
        <strong>Xem tất cả bài viết với tag:</strong>
      </div>
      <div>
        <ul>
          {newCategory?.map((cate) => {
            return (
              <li key={cate._id}>
                <button onClick={() =>handleChange(cate._id)}>{cate.namecateBlog}</button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Listcate;
