import React from "react";
import "./selectSize.css";
import { Option } from "../../../../constants/products";

export default function SelectSize({ options, selectedSize }: any) {
  function modifySize(value: string) {
    if (
      value.includes("US 8") ||
      value.includes("xs") ||
      value.includes("38")
    ) {
      return 38;
    } else if (
      value.includes("US 9") ||
      value.includes("small") ||
      value.includes("39")
    ) {
      return 39;
    } else if (
      value.includes("US 10") ||
      value.includes("medium") ||
      value.includes("40")
    ) {
      return 40;
    } else if (
      value.includes("US 11") ||
      value.includes("large") ||
      value.includes("44")
    ) {
      return 44;
    } else if (
      value.includes("US 13") ||
      value.includes("xl") ||
      value.includes("46")
    ) {
      return 46;
    }
  }
  return (
    <div className="select_size_wrapper">
      <p className="select_size_label">Select Size</p>
      <div className="size_wrapper">
        {options.map((option: Option, index: number) => {
          return (
            <div className="size_spacing" key={index}>
              <div className="size_chip" onClick={() => selectedSize(option)}>
                <p className="size_text">{modifySize(option.value)}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
