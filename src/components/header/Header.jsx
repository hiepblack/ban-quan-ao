import React, { useState } from "react";
import "./header.css";
import { Link } from "react-router-dom";

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

const Header = ({toggleCart,setToggleCart}) => {
  const [toggle, setToggle] = useState(false);
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
      <nav className="nav container">
        <Link to="#" className="nav__logo">
          HaHiep
        </Link>

        <div className={toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            {nav_Menu.map((item) => {
              return (
                <li className="nav__item">
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
          <i class="uil uil-search"></i>
          <Link to="/signin">
            <i class="uil uil-user"></i>
          </Link>
          <i class="uil uil-shopping-bag"
          onClick={()=>setToggleCart(true)}
          ></i>
        </div>
        <div className="nav__menu__icon">
          <i class="uil uil-align-justify nav__icon"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
