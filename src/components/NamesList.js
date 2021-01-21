import React from "react";
import Row from "./Row";

const NamesList = ({ names }) => {

  const rows = names.map((name, index) =>
    <Row key={index} name={name.name} amount={name.amount} />
  );

  return(
    <div>
      {names.length === 0 ? "No names found" : rows}
    </div>
  );
};

export default NamesList;
