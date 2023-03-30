import React from "react";
import "./title.css"

const Title = ({name,desc}) => {
  return (
    <div className="title container">
      <h1 className="title__content">{name.toUpperCase()}</h1>
      <p>{desc}</p>
    </div>
  );
};

export default Title;
