import React from "react";

const FilterForm = ({ value, handleChange }) => 
  <div>
    <label>
      Filter list:
      <input value={value} onChange={handleChange} />
    </label>
  </div>

export default FilterForm;
