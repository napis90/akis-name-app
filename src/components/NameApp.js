import React, { useState } from "react";
import FilterForm from "./FilterForm";
import NamesList from "./NamesList";
import namesJSON from "../data/names";

const { names } = namesJSON; 

const initialSort = () =>
  [...names].sort((a, b) => b.amount - a.amount);

const NameApp = () => {
  const [namesList, setnamesList] = useState(initialSort);
  const [filter, setFilter] = useState("");

  const sortByAmount = () =>
    setnamesList([...namesList].sort((a, b) => b.amount - a.amount));
  
  const sortAlphabetically = () =>
    setnamesList([...namesList].sort());

  const handleFilter = e => setFilter(e.target.value);

  const filterNames = () => 
    namesList.filter(e =>
      e.name
        .toLowerCase()
        .includes(filter.toLowerCase()));
  
  return (
    <div>
      <FilterForm value={filter} handleChange={handleFilter} />
      {/* TODO: buttons for ordering nameslist */}
      {/* TODO: turn nameslist into a table with two columns */}
      <NamesList names={filterNames()} />
      {/* TODO: return No results found if namesList empty */}
    </div>
  );
};

export default NameApp;
