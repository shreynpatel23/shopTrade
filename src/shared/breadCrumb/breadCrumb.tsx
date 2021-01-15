import React from "react";
import "./breadCrumb.css";

export default function BreadCrumb({ listOfLink }: any) {
  return (
    <div style={{ padding: "10px 0" }}>
      <div className="wrapper">
        {listOfLink.map((link: any, index: number) => {
          return (
            <span className="link_bg" key={index}>
              {link} {index !== listOfLink.length - 1 && "/"}
            </span>
          );
        })}
      </div>
    </div>
  );
}
