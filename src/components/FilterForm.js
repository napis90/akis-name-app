import React from "react";

const FilterForm = ({ value, handleChange }) => {

  console.log("inside FilterForm", value)

  return(
    <div>
      <label>
        filter list by name:
        <input value={value} onChange={handleChange} />
      </label>
    </div>
  );
};

export default FilterForm;