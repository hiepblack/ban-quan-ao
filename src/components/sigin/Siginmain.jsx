import React from "react";
import "./sigin.css";
import { Link } from "react-router-dom";

const Siginmain = () => {
  return (
    <section className="container signin">
      <form className="form_login">
        <h2 className="title_sigin">Đăng Nhập</h2>
        <p>Vui lòng nhập email và mật khẩu</p>
        <div className="lable_input">
          <input type="email" placeholder="Email..." required />
        </div>
        <div className="lable_input">
          <input type="password" placeholder="Password..." required />
        </div>

        <div className="btn-sumbit">
          <button type="submit" className="up">
            Đăng nhập
          </button>
        </div>
      </form>
      <div className="create-account-wrap">
        <span>Bạn chưa có tài khoản ?</span>
        <Link to={"/signup"}>Đăng Kí</Link>
      </div>
    </section>
  );
};

export default Siginmain;
