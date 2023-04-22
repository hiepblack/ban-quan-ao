import React, { useContext } from "react";
import "./search.css";
import { AuthContext } from "../../context/AuthContext";

const Search = () => {
  const { openModelSearch, setOpenModelSearch } = useContext(AuthContext);

  return (
    <div
      className={
        openModelSearch ? "product__model active-modal" : "product__model"
      }
    >
      <div className="product__model__content">
        <p className="close__form" onClick={() => setOpenModelSearch(false)}>
          <i class="uil uil-times"></i>
        </p>
        <div className="product__model__close">
          <form action="">
            <input type="text" placeholder="Tìm kiếm sản phẩm..." />
            <button>
              <i className="uil uil-search"></i>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Search;
