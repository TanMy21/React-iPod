import React from "react";
import "../Static/Mainscreen.css";
import Menubar from "./Menubar";
import Cover from "./Cover";

const Mainscreen = (props) => {
  // ---------------------- Destructuring --------------------
  const { menuOptions } = props;

  return (
    <div className="mainscreen">
      <Menubar menuOptions={menuOptions} />
      <Cover />
    </div>
  );
};

export default Mainscreen;
