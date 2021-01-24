import React from "react";
import FilterForm from "./FilterForm";
import Button from "./Button";

const Tools = ({
  filter,
  handleFilter,
  handleSortAlphabeticallly,
  handleSortByAmount }) => 
  <div className = "tools">
    <FilterForm
      value        = {filter}
      handleChange = {handleFilter} />
    <Button
      text        = "Sort alphabetically"
      handleClick = {handleSortAlphabeticallly} />
    <Button
      text        = "Sort by amount"
      handleClick = {handleSortByAmount} />
  </div>;

export default Tools;
