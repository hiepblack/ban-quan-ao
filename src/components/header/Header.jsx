import React, { useState } from "react";
import "./header.css";


const Header = () => {

  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav__logo">
          HaHiep
        </a>

        <div className="nav__menu">
          <ul className="nav__list grid">
            <li className="nav__item">
              <a href="#home" className="nav__link">
                <i className="uil uil-estate nav__icon"></i> Trang Chủ
              </a>
            </li>
            <li className="nav__item">
              <a href="#home" className="nav__link">
                <i className="uil uil-estate nav__icon"></i> Bộ Sưu Tập
              </a>
            </li>
            <li className="nav__item">
              <a href="#home" className="nav__link">
                <i className="uil uil-estate nav__icon"></i> Blog
              </a>
            </li>
            <li className="nav__item">
              <a href="#home" className="nav__link">
                <i className="uil uil-estate nav__icon"></i> Giới Thiêu
              </a>
            </li>
            <li className="nav__item">
              <a href="#home" className="nav__link">
                <i className="uil uil-estate nav__icon"></i> Liên Lạc
              </a>
            </li>
          </ul>
          <i class="uil uil-times nav__close"></i>
        </div>

        <div className="nav__right">
            <i class="uil uil-search"></i>
            <i class="uil uil-user"></i>
            <i class="uil uil-shopping-bag"></i>
        </div>
        
      </nav>
    </header>
  );
};

export default Header;
