import React from "react";
import "./AlertBox.style.css";

const AlertBox = (props) => {
  return <div className="alertBox">{props.text}</div>;
};

export default AlertBox;
