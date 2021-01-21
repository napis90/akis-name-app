import React from "react";

const NameRow = ({name, amount, handleClick}) => {
  return(
    <div>
      {`${name}: ${amount}`}
      <button
        type="button"
        onClick={() => handleClick(name, amount)} >
        info
      </button>
    </div>
  );
};

export default NameRow;
