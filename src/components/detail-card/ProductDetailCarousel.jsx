import React from "react";
import "./detail.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const ProductDetailsCarousel = ({ product }) => {
  return (
    <div className="image__product">
      <Carousel
        infiniteLoop={true}
        showIndicators={false}
        showStatus={false}
        thumbWidth={60}
        className="productCarousel"
      >
        {product?.imgProduct.map((img,index) => (
          <React.Fragment key={index}>
          <img src={img} alt="" />
          </React.Fragment>
        ))}
      </Carousel>
    </div>
  );
};

export default ProductDetailsCarousel;
