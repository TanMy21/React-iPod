import React from "react";
import "../Static/Screen.css";
import Mainscreen from "./Mainscreen";

const Screen = (props) => {
  // -------------------------- Prop Destructuring ---------------
  const { menuOptions } = props;

  return (
    <div className="screen">
      <Mainscreen menuOptions={menuOptions} />
    </div>
  );
};

export default Screen;
