import React from "react";
import img from "../../assets/blog1_92a31b7664e6482d81e6aa1be9ae5669_1024x1024.webp";
import "./cardnew.css";
import { Link } from "react-router-dom";

const CardNew = () => {
  return (
    <div class="cardNew">
      <div class="cardNew__header">
        <img src={img} alt="rover" />
      </div>
      <div class="cardNew__body">
        <span >Technology</span>
        <Link to='/blog'> 
        <h4>Why is the Tesla Cybertruck designed the way it is?</h4>
        </Link>
        <p>An exploration into the truck's polarising design</p>
      </div>
    </div>
  );
};

export default CardNew;
