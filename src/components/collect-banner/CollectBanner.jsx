import React from "react";
import "./collectbanner.css";
import { Link } from "react-router-dom";
import img1 from "../../assets/homepage_banner_box_1_image.webp";
import img2 from "../../assets/homepage_banner_box_2_image.webp";

const CollectBanner = () => {
 
  return (
    <div className="collectbanner container">
      <div
        className="collectbanner__box"
        data-aos="fade-right"
      >
        <div className="collectbanner__box__img">
          <img src={img1} alt="" />
        </div>
        <div className="collectbanner__box__content">
          <p>BỘ SƯU TẬP HÈ 2022</p>
          <h2>SUMMER FEELING</h2>
          <p className="desc">
            Ẩn chứa bên trong vẻ thô sần là nét nữ tính, thanh lịch của loại
            chất liệu cổ điển vượt thời gian – Tweed. Chất liệu này có khả năng
            chống ẩm ướt và giữ ấm khá tốt, thích hợp với những ngày se lạnh.
          </p>
          <button>
            <Link to="/product">Khám Phá Ngay</Link>
          </button>
        </div>
      </div>
      <div className="collectbanner__box" data-aos="fade-left">
        <div className="collectbanner__box__content">
          <p>BỘ SƯU TẬP HÈ 2022</p>
          <h2 className="title1">SWEET MOMENT</h2>
          <p className="desc">
            Chẳng cần mix cầu kỳ, chỉ cần diện cho mình một chiếc đầm Tweed từ
            SpeedX, mix cùng những món phụ kiện đơn giản, đã đủ giúp bạn trở nên
            thời thượng và sang trọng khi xuống phố. Cùng ngắm các thiết kế đầm
            Tweed của NEM và inbox ngay để đặt hàng mẫu bạn thích nhé
          </p>
          <button>
            <Link to="/product">Khám Phá Ngay</Link>
          </button>
        </div>
        <div className="collectbanner__box__img">
          <img src={img2} alt="" />
        </div>
      </div>
    </div>
  );
};

export default CollectBanner;
