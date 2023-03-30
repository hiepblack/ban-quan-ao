import React from "react";
import "./slice.css";
import dataSlide from "./dataSlide";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { Pagination, Autoplay, EffectFade } from "swiper";

const Slide = () => {
 
  return (
    <section className="slide" id="home">
      <Swiper
        className="slide__container mySwiper"
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        spaceBetween={24}
        pagination={{
          clickable: true,
        }}
        effect={"fade"}
        breakpoints={{
          576: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 48,
          },
        }}
        modules={[Pagination, Autoplay, EffectFade]}
      >
        {dataSlide.map(({ id, image, title, description, index }) => {
          return (
            <SwiperSlide className="slide__container" key={index}>
              <div className="slide__content-box">
                <div className="slide__content-box-card">
                  <h1>{title}</h1>
                  <p>{description}</p>
                  <div className="slide__content-box-card-button">
                    <button className="button button_slide">
                      Xem sản phẩm
                    </button>
                    <button className="button button_slide">Mua ngay</button>
                  </div>
                </div>
              </div>
              <div className="slide__content-show">
                <img src={image} alt="" />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Slide;
