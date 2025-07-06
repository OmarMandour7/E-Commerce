import React, { useState } from "react";
import UnopDropdown from "unop-react-dropdown";
import sort from "../../images/sort.png";
const SearchCountResult = ({ title, onClick }) => {
  const [sortType, setSortType] = useState("SortBy");
  const handler = () => {};
  let value = localStorage.getItem("sortType");
  let titlle = "";
  const clickMe = (key) => {
    localStorage.setItem("sortType", key);
   
    if (value === "") {
      setSortType("No Sort");
    } else if (value === "الاكثر مبيعا") {
      setSortType("   Best Sellers");
    } else if (value === "الاعلي تقييما") {
      setSortType("Top Rated");
    } else if (value === "السعر من الاقل للاعلي") {
      setSortType(" Price : Low To High");
    } else if (value === "السعر من الاعلي للاقل") {
      setSortType(" Price : High To Low");
    }
    onClick();
  };
  return (
    <div className="d-flex justify-content-between pt-3 px-2">
      <div className="sub-tile">{title}</div>
      <div className="search-count-text d-flex ">
        <UnopDropdown
          onAppear={handler}
          onDisappearStart={handler}
          trigger={
            <p className="mx-3 mon dark">
              <img
                width="20px"
                height="20px"
                className="mx-1"
                src={sort}
                alt=""
              />
              {sortType}
            </p>
          }
          delay={0}
          align="CENTER"
          hover
        >
          <div className="card-filter">
            <div
              onClick={() => clickMe("")}
              className="border-bottom card-filter-item mon"
            >
              {" "}
              No Sort
            </div>
            <div
              onClick={() => clickMe("الاكثر مبيعا")}
              className="border-bottom mon card-filter-item"
            >
              Best Sellers
            </div>
            <div
              onClick={() => clickMe("الاعلي تقييما")}
              className="border-bottom mon card-filter-item"
            >
              Top Rated
            </div>
            <div
              onClick={() => clickMe("السعر من الاقل للاعلي")}
              className="border-bottom mon card-filter-item"
            >
              Price : Low To High
            </div>
            <div
              onClick={() => clickMe("السعر من الاعلي للاقل")}
              className=" card-filter-item mon"
            >
              Price : High To Low
            </div>
          </div>
        </UnopDropdown>
      </div>
    </div>
  );
};

export default SearchCountResult;
