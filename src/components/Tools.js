import React from "react";
import FilterForm from "./FilterForm";
import Button from "./Button";

const Tools = ({
  filter,
  handleFilter,
  handleSortAlphabetically,
  handleSortByAmount }) => 
  <div className = "tools">
    <FilterForm
      value        = {filter}
      handleChange = {handleFilter} />
    <Button
      text        = "Sort alphabetically"
      handleClick = {handleSortAlphabetically} />
    <Button
      text        = "Sort by popularity"
      handleClick = {handleSortByAmount} />
  </div>;

export default Tools;
