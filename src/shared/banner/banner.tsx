import React from "react";
import "./banner.css";

export default function Banner() {
  return (
    <div className="banner_back">
      <div style={{ padding: "0 10px" }}>
        <p className="banner_heading">
          Invite friends to Big Fashion Festival & get up to $150 MynCash for
          every person who visits
        </p>
      </div>
      <div style={{ padding: "0 10px" }}>
        <div className="button_back">
          <p className="button_text">Invite now</p>
        </div>
      </div>
    </div>
  );
}
