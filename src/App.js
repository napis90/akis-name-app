import React, {
  useState,
  useEffect
} from "react";
import NamesList from "./components/NamesList";
import namesJSON from "./data/names";

const App = () => {
  const { names } = namesJSON;
  const [sortedNames, setSortedNames] = useState([]);

  console.log("inside app", names, sortedNames)
 
  const sortNamesByProperty = property =>
    names
      .map(e => e)
      .sort((a, b) => {
        if (a[property] < b[property]) {
          return 1;
        }

        if (a[property] > b[property]) {
          return -1
        }

        return 0;
      });

  useEffect(() => {
    setSortedNames(sortNamesByProperty("amount"));
  }, []);
  
  useEffect(() => {
    
  });

  return (
    <div>
      <NamesList names={sortedNames} />
    </div>
  );
};

export default App;
