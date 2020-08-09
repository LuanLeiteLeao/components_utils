import React, { useState } from "react";
import RightNav from "../RightNav/RightNav";
import "./style.css";

const Burguer = () => {
  const [open, setOpen] = useState(true);
  const clasNameOpen = "burguer open";
  const clasNameClosed = "burguer closed";

  const choiceOpenOrClosed = () => {
    const clasName = document.getElementById("burguer") as HTMLElement;
    return open ? openMenuBurguer(clasName) : closeMenuBurguer(clasName);
  };

  const openMenuBurguer = (clasName: HTMLElement) => {
    setOpen(false);
    clasName.className = clasNameOpen;
  };

  const closeMenuBurguer = (clasName: HTMLElement) => {
    setOpen(true);
    clasName.className = clasNameClosed;
  };
  return (
    <>
      <div id="burguer" className="burguer closed" onClick={choiceOpenOrClosed}>
        <div />
        <div />
        <div />
      </div>
      <RightNav isOpen={open} />
    </>
  );
};

export default Burguer;
