import React from "react";

const Name = ({ name, amount, handleClick }) => 
    <li
      className = "name"
      onClick = {() => handleClick(name, amount)}>
      <p>{`${name}: ${amount}`}</p>
    </li>;

export default Name;
