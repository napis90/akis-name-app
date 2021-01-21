import React from "react";
import NameRow from "./NameRow";

const NamesList = ({ names, handleClick }) => {
  const rows = names.map((name, index) =>
    <NameRow
      key={index}
      name={name.name}
      amount={name.amount}
      handleClick={handleClick} />
  );

  return(
    <div>
      {names.length > 0
        ? rows
        : "No matching names found"}
    </div>
  );
};

export default NamesList;
