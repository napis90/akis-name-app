import React, { useState } from "react";
import Header from "./Header";
import Tools from "./Tools";
import NamesList from "./NamesList";
import Info from "./Info";
import namesJSON from "../data/names";

const { names } = namesJSON;

const initialSort = () =>
  [...names].sort((a, b) =>
    b.amount - a.amount);

const NameApp = () => {
  const [namesList, setNamesList] = useState(initialSort);
  const [name, setName]           = useState("");
  const [amount, setAmount]       = useState(0);
  const [filter, setFilter]       = useState("");
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
    <div    className  = "name-app">
    <Header namesTotal = {namesTotal} />
      <Info
        name   = {name}
        amount = {amount} />
      <Tools
        filter                   = {filter}
        handleFilter             = {handleFilter}
        handleSortAlphabetically = {sortAlphabetically}
        handleSortByAmount       = {sortByAmount}
        />
      <NamesList
        names       = {filterNames()}
        handleClick = {handleInfo} />
    </div>
  );
};

export default NameApp;
