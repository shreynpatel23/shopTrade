import React from "react";
import "./filters.css";

export default function Filters({
  listOfTags,
  selectedTag = "",
  onSelectTag
}: any) {
  return (
    <div className="filter_wrapper">
      <p className="label">Filters:</p>
      <div className="filter_chips_wrapper">
        <div className="filter_chip_spacing">
          <div
            className={`filter_chip ${
              selectedTag === "" ? "active_filter" : ""
            }`}
            onClick={() => onSelectTag("")}
          >
            <p className="filter_chip_text">All Products</p>
          </div>
        </div>
        {listOfTags.map((tag: string, index: number) => {
          return (
            <div className="filter_chip_spacing" key={index}>
              <div
                className={`filter_chip ${
                  selectedTag === tag ? "active_filter" : ""
                }`}
                onClick={() => onSelectTag(tag)}
              >
                <p className="filter_chip_text">{tag}</p>
              </div>
            </div>
          );
        })}
        {selectedTag && (
          <p className="clear_filter" onClick={() => onSelectTag("")}>
            Clear
          </p>
        )}
      </div>
    </div>
  );
}
