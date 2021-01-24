import React from "react";

const FilterForm = ({ value, handleChange }) => 
  <div className = "filter-form">
    <label
      htmlFor = "filter-list">
      Filter list: 
    </label>
    <input
      value    = {value}
      onChange = {handleChange} />
  </div>;

export default FilterForm;
