import React from "react";
import "./sigin.css";
import { Link } from "react-router-dom";

const Siginmain = ({ data, setData,handleClick }) => {
  return (
    <section className="container signin">
      <form className="form_login" onSubmit={handleClick}>
        <h2 className="title_sigin">Đăng Nhập</h2>
        <p>Vui lòng nhập email và mật khẩu</p>
        <div className="lable_input">
          <input
            type="email"
            placeholder="Email..."
            required
            value={data.email}
            onChange={(e) => {
              setData((pre) => {
                return { ...pre, email: e.target.value };
              });
            }}
          />
        </div>
        <div className="lable_input">
          <input
            type="password"
            placeholder="Password..."
            required
            value={data.password}
            onChange={(e) => {
              setData((pre) => {
                return { ...pre, password: e.target.value };
              });
            }}
          />
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
