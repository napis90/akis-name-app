import React from "react";

const NameInfo = ({name, amount}) => 
  <div>
    {name
     ? `There are ${amount} people named ${name}.`
     : true}
  </div>

export default NameInfo;
