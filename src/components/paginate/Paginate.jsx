import React from "react";
import "./paginate.css";

const Paginate = ({ pageCount, page, setPage }) => {
  return (
    <ul className="paginate">
      {[...Array(pageCount).keys()].map((number) => {
        return (
          <li
            key={number}
            onClick={() => {
              setPage(number);
            }}
            className={page === number ? "checked" : ""}
          >
            {number + 1}
          </li>
        );
      })}
    </ul>
  );
};

export default Paginate;
