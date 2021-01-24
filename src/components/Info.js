import React from "react";

const Info = ({name, amount}) =>
  <div className = "info">
    <p>
      {name
        ? `There are ${amount} people named ${name}.`
        : "Click a name for info"}
    </p>
  </div>;

export default Info;
