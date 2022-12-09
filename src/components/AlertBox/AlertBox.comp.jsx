import React from "react";
import "./AlertBox.style.css";

const AlertBox = (props) => {
  return (
    <div
      className={
        props.variant
          ? props.variant === "error"
            ? "alertBox lightred"
            : "alertBox lightgreen"
          : "alertBox lightred"
      }
    >
      {props.text}
    </div>
  );
};

export default AlertBox;
