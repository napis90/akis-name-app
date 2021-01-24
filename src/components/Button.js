import React from "react";

const Button = ({ text, handleClick }) => 
  <button
    className = "button"
    type      = "button"
    onClick   = {handleClick}>
    {text}
  </button>;

export default Button;
