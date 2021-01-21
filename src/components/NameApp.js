import React, { useState } from "react";
import FilterForm from "./FilterForm";
import NamesList from "./NamesList";
import NameInfo from "./NameInfo";
import namesJSON from "../data/names";

const { names } = namesJSON; 
const initialSort = () =>
  [...names].sort((a, b) => b.amount - a.amount);

const NameApp = () => {
  const [namesList, setNamesList] = useState(initialSort);
  const [name, setName] = useState("");
  const [amount, setAmount] = useState(0);
  const [filter, setFilter] = useState("");
  const namesTotal = namesList.reduce((a, c) => a + c.amount, 0);
  
  const handleFilter = e => setFilter(e.target.value);

  const filterNames = () => 
    namesList.filter(e =>
      e.name
        .toLowerCase()
        .includes(filter.toLowerCase()));

  const sortAlphabetically = () =>
    setNamesList([...namesList].sort((a, b) =>
      a.name.localeCompare(b.name)));
  
  const sortByAmount = () =>
    setNamesList([...namesList].sort((a, b) =>
      b.amount - a.amount));

  const handleInfo = (name, amount) => {
    setName(name);
    setAmount(amount);
  };
        
  return (
    <div>
      <h1>Aki's name app</h1>
      {`${namesTotal} names in list`}
      <FilterForm value={filter} handleChange={handleFilter} />
      <button type="button"
        onClick={() => sortAlphabetically()}>
        sort alphabetically
      </button>
      <button type="button"
        onClick={() => sortByAmount()}>
        sort by amount
      </button>
      <NameInfo 
        name={name}
        amount={amount}
      />
      <NamesList
        names={filterNames()}
        handleClick={handleInfo} />
      {/* TODO: style list to look more tabular */}
    </div>
  );
};

export default NameApp;
