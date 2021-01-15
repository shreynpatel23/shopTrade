import React from "react";
import "./sorting.css";
import downArrow from "../../../assets/images/arrow-down.svg";
import { sortingTypes } from "../../../constants/sortingTypes";

export default function Sorting({ sortingType, onChangeSortType }: any) {
  return (
    <div className="dropdown">
      <div className="sorting_wrapper">
        <div className="sort_spacing">
          <p className="sort_type_label">Sort By</p>
        </div>
        <div className="sort_spacing">
          <p className="sort_type">
            {sortingType === "" ? "Default" : sortingType}
          </p>
        </div>
        <div className="sort_spacing">
          <img
            src={downArrow}
            alt="down_arrow"
            width="10px"
            style={{ marginBottom: "3px" }}
          />
        </div>
      </div>
      <div className="dropdown-content">
        <div
          className={`option_wrapper ${
            sortingType === sortingTypes.ASCENDING ? "active_dropdown_link" : ""
          }`}
          onClick={() => {
            onChangeSortType(sortingTypes.ASCENDING);
          }}
        >
          <p className="option">Price {sortingTypes.ASCENDING}</p>
        </div>
        <div
          className={`option_wrapper ${
            sortingType === sortingTypes.DESCENDING
              ? "active_dropdown_link"
              : ""
          }`}
          onClick={() => {
            onChangeSortType(sortingTypes.DESCENDING);
          }}
        >
          <p className="option">Price {sortingTypes.DESCENDING}</p>
        </div>
        <div
          className={`option_wrapper ${
            sortingType === sortingTypes.DEFAULT ? "active_dropdown_link" : ""
          }`}
          onClick={() => {
            onChangeSortType(sortingTypes.DEFAULT);
          }}
        >
          <p className="option">Defailt</p>
        </div>
      </div>
    </div>
  );
}
