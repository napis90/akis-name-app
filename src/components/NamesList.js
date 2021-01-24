import React from "react";
import Name from "./Name";

const NamesList = ({
  names,
  handleClick}) => {

  const rows = () => names.map((name, index) =>
    <div
      className = "names-list-item"
      key       = {index}>
      <Name
        name        = {name.name}
        amount      = {name.amount}
        handleClick = {handleClick} />
    </div>
  );

  return(
    <div className = "names-list">
      {names.length > 0
        ? <ul>{rows()}</ul>
        : "No matching names found"}
    </div>
  );
};

export default NamesList;
