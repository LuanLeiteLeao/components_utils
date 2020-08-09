import React from "react";
import "./style.css";
import Burguer from "./Burguer";

const Navbar = () => {
  return (
    <>
      <header className="header">
        <div className="logo">Navbar</div>
        <Burguer />
      </header>
    </>
  );
};

export default Navbar;
