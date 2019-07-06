import React from "react";
import "./Button.css";

const Button = props => {
  return (
    <button
      className="btn"
      {...props}
      disabled={props.disabled && props.id !== "CE"}
    >
      {props.children}
    </button>
  );
};

export default Button;
