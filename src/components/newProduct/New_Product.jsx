import React from "react";
import "./newproduct.css";
import Title from "../title/Title";
import CardProducts from "../cardProduct/CardProducts";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import 'swiper/css/navigation';
import { Pagination, Autoplay, Navigation } from "swiper";

const New_Product = () => {
  return (
    <section className="container newproduct">
           <Title name={"Top 10 Sản phẩm bán chạy nhất"} />
           <Swiper
        className="mySwiper collect__gallery"
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        navigation={true}
        spaceBetween={5}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          576: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 3,
          },
        }}
        modules={[Pagination, Autoplay, Navigation]}
      >
        <SwiperSlide>
          <CardProducts />
          <CardProducts />
        </SwiperSlide>
        <SwiperSlide>
          <CardProducts />
          <CardProducts />
        </SwiperSlide>
        <SwiperSlide>
          <CardProducts />
          <CardProducts />
        </SwiperSlide>
        <SwiperSlide>
          <CardProducts />
          <CardProducts />
        </SwiperSlide>
        <SwiperSlide>
          <CardProducts />
          <CardProducts />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default New_Product;
