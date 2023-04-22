import React from "react";
import "./cardnew.css";

const CardNew = ({bl}) => {
  return (
    <div class="cardNew">
      <div class="cardNew__header">
        <img src={bl?.imgBlog} alt="rover" />
      </div>
      <div class="cardNew__body">
        <span >{bl?.cateBlogId.namecateBlog}</span>
        <h4>{bl?.title}</h4>
        <p>{bl?.sortDesc}</p>
      </div>
    </div>
  );
};

export default CardNew;
