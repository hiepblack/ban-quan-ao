import React from "react";
import "./cardProduct.css";

const CardProduct = () => {
  return (
    <div class="minip">
      <div class="mg">
        <div class="clr"></div>
        <div class="group">
          <span>membergroup</span>
        </div>
      </div>
      <div
        class="av"
        style={{
          backgroundImage:
            "url('https://pbs.twimg.com/media/DjfSp1BVAAAiEyV.jpg')",
        }}
      ></div>
      <div class="info">
        <name>jinkyu do</name>
        <deets>
          369 › he/him
          <br />
          soccer player
        </deets>
      </div>
      <a class="plot" title="plot with jinkyu" href="/">
        Mua Ngay →
      </a>
    </div>
  );
};

export default CardProduct;
