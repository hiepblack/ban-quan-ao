import React from "react";
import "./title.css"

const Title = ({name}) => {
  return (
    <div className="title container">
      <h2 className="title__content">{name.toUpperCase()}</h2>
    </div>
  );
};

export default Title;
