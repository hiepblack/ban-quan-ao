import React from "react";
import "./banner.css";

const Banner = ({ param, title }) => {
  return (
    <section className="banner  section">
      <div class="hero-image">
        <div class="hero-text">
          <h1 style={{ fontSize: "2rem" }}>{param}</h1>
          <p style={{ fontSize: "3rem" }}>{title}</p>
        </div>
      </div>
    </section>
  );
};

export default Banner;
