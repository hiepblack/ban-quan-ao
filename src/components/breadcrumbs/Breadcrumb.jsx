import React from "react";
import "./breadcrumb.css";
import { Link } from "react-router-dom";

const Breadcrumb = ({data}) => {
  return (
    <div className="container">
      <nav className="breadcrumb ">
        <ul className="breadcrumb_ul">
          <li className="">
            <Link to="/" className="">
                <strong>
              Home
                </strong>
            </Link>
            <i class="bx bx-chevron-right"></i>
          </li>
          <li>
            <Link to={`${data?.url}`} className="">
            {data?.namePage}
            </Link>
            <i class="bx bx-chevron-right"></i>
          </li>
          <li>
            <span className="">{data?.blog}</span>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Breadcrumb;
