import React from "react";
import "./sigup.css";
import { Link } from "react-router-dom";

const SigupMain = ({dataSignUp,setdataSignUp,handleClick}) => {
  return (
    <section className="container signup">
      <form className="form_login" onSubmit={handleClick}>
        <h2 className="title_sigin">Tạo tài khoản</h2>
        <div className="lable_input">
          <input type="text" placeholder="Name" required value={dataSignUp.userName}
            onChange={(e) => {
              setdataSignUp((pre) => {
                return { ...pre, userName: e.target.value };
              });
            }}/>
        </div>
        <div className="lable_input">
          <input type="email" placeholder="Email" required value={dataSignUp.email}
            onChange={(e) => {
              setdataSignUp((pre) => {
                return { ...pre, email: e.target.value };
              });
            }}/>
        </div>

        <div className="lable_input">
          <input type="password" placeholder="PassWord" required value={dataSignUp.passWord}
            onChange={(e) => {
              setdataSignUp((pre) => {
                return { ...pre, passWord: e.target.value };
              });
            }}/>
        </div>
        <div className="lable_input">
          <input type="password" placeholder="Confirm passWord" required value={dataSignUp.confirmpassWord}
            onChange={(e) => {
              setdataSignUp((pre) => {
                return { ...pre, confirmpassWord: e.target.value };
              });
            }}/>
        </div>
        <div className="btn-sumbit">
          <button type="submit" className="up">
            Đăng kí
          </button>
        </div>
      </form>
      <div className="create-account-wrap">
        <span>Bạn đã có tài khoản ?</span>
        <Link to={"/signin"}> Đăng Nhập </Link>
      </div>
    </section>
  );
};

export default SigupMain;
