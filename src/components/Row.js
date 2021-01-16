import React from "react";

const Row = ({name, amount}) => {
  return(
    <div>
      <p>{`${name}: ${amount}`}</p>
    </div>
  );
};

export default Row;