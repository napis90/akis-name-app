import React from "react";

const Header = ({ namesTotal }) => 
  <div className = "header">
    <h1>Aki's name app</h1>
    {`${namesTotal} names in total`}
  </div>;

export default Header;
