import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="footer container">
      <div className="in__footer ">
        <div>
          <h5 className="text-footer">Số ĐKKD 011111111</h5>
          <p>Địa chỉ: Phòng 23, tầng 10, Tòa nhà DPCH</p>
          <p>Chăm sóc khách hàng: 0243.9388512</p>
          <p>Mua hàng online: 0246.2909098</p>
        </div>
        <div>
          <h5 className="text-footer">CHÍNH SÁCH GIAO HÀNG</h5>
          <p>Địa chỉ: Phòng 23, tầng 10, Tòa nhà DPCH</p>
          <p>Chăm sóc khách hàng: 0243.9388512</p>
          <p>Mua hàng online: 0246.2909098</p>
        </div>
        <div>
          <h5 className="text-footer">CHÍNH SÁCH GIAO HÀNG</h5>
          <p>Địa chỉ: Phòng 23, tầng 10, Tòa nhà DPCH</p>
          <p>Chăm sóc khách hàng: 0243.9388512</p>
          <p>Mua hàng online: 0246.2909098</p>
        </div>
        <div>
          <h5 className="text-footer">CHÍNH SÁCH GIAO HÀNG</h5>
          <p>số 343 đường Nguyễn Văn Cừ, P. Gia Thụy, Q. Long Biên, Hà Nội</p>
          <p>Chăm sóc khách hàng: 0243.9388512</p>
          <p>Mua hàng online: 0246.2909098</p>
        </div>
      </div>
      <div className="container">
        <div className="end-footer">
          <div>
            <p>© 2022 - Bản quyền SpeedX. Cung cấp bởi Haravan</p>
          </div>
          <div className="footer__icon">
            <Link to="">
              <i class="uil uil-twitter"></i>
            </Link>
            <Link to="">
              <i class="uil uil-instagram-alt"></i>
            </Link>
            <Link to="">
              <i class="uil uil-facebook"></i>
            </Link>
            <Link to="">
              <i class="uil uil-youtube"></i>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
