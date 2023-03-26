import React from "react";
import "./hot_collect.css";
import Title from "../title/Title";
import CardCategory from "../cardCategory/CardCategory";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import 'swiper/css/navigation';
import { Pagination, Autoplay, Navigation } from "swiper";

const Hot_Collect = () => {
  return (
    <section className="container collect">
      <Title name={"BỘ SƯU TẬP HOT NHẤT 2022"} />
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
            slidesPerView: 4,
          },
        }}
        modules={[Pagination, Autoplay, Navigation]}
      >
        <SwiperSlide>
          <CardCategory />
        </SwiperSlide>
        <SwiperSlide>
          <CardCategory />
        </SwiperSlide>
        <SwiperSlide>
          <CardCategory />
        </SwiperSlide>
        <SwiperSlide>
          <CardCategory />
        </SwiperSlide>
        <SwiperSlide>
          <CardCategory />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Hot_Collect;
