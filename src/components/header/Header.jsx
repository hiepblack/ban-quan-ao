import React, { useState, useContext } from "react";
import "./header.css";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { AuthContext } from "../../context/AuthContext";
import { toast } from "react-toastify";

const nav_Menu = [
  {
    name: "Trang Chủ",
    icon: "uil uil-estate nav__icon",
    path: "/",
  },
  {
    name: "Bộ Sưu Tập",
    icon: "uil uil-chart-pie-alt nav__icon",
    path: "/product",
  },
  {
    name: " Blog",
    icon: "uil uil-blogger-alt nav__icon",
    path: "/blog",
  },
  {
    name: "Giới Thiêu",
    icon: "uil uil-store nav__icon",
    path: "/",
  },
  {
    name: "Liên Lạc",
    icon: "uil uil-calling nav__icon",
    path: "/contact",
  },
];

const Header = () => {
  const navigate = useNavigate();
  const { user, dispatch, setToggleCart, setOpenModelSearch } =
    useContext(AuthContext);
  const logout = () => {
    dispatch({ type: "LOGOUT" });
    localStorage.removeItem("token");
    toast.success("Bạn đã đăng xuất!", {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
    navigate("/");
  };

  const [toggle, setToggle] = useState(false);
  const totalProduct = useSelector((state) => state.cart.totalQuantity);
  /* ======Change Background header======= */
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    if (this.scrollY >= 80) {
      header.classList.add("scroll-header");
    } else {
      header.classList.remove("scroll-header");
    }
  });
  return (
    <header className="header">
      <nav className="nav">
        <Link to="#" className="nav__logo">
          HaHiep
        </Link>

        <div className={toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            {nav_Menu.map((item, index) => {
              return (
                <li className="nav__item" key={item.name}>
                  <Link to={item.path} className="nav__link">
                    <i className={item.icon}></i> {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
          <i
            class="uil uil-times nav__close"
            onClick={() => {
              setToggle(!toggle);
            }}
          ></i>
        </div>

        <div className="nav__right">
          <div
            onClick={() => {
              setOpenModelSearch(true);
            }}
          >
            <i className="uil uil-search"></i>
          </div>
          {user ? (
            <div>
              <p>
                {user.userName}
                <i className="uil uil-signout" onClick={logout}></i>
              </p>
            </div>
          ) : (
            <div>
              <Link to="/signin">
                <i className="uil uil-user"></i>
              </Link>
            </div>
          )}

          <div className="nav__right__bag">
            <p className="totalProduct">{totalProduct}</p>
            <i
              class="uil uil-shopping-bag"
              onClick={() => setToggleCart(true)}
            ></i>
          </div>
        </div>
        <div
          className="nav__menu__icon"
          onClick={() => {
            setToggle(true);
          }}
        >
          <i class="uil uil-align-justify nav__icon"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
