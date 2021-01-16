import React from "react";
import NamesList from "./components/NamesList";
import namesObj from "./data/names";

const App = () => {
  const {names} = namesObj;

  return (
    <div>
      <NamesList names={names} />
    </div>
  );
};

export default App;
