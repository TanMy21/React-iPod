import React from "react";
import "../Static/Mainscreen.css";
import Menubar from "./Menubar";
import Cover from "./Cover";

const Mainscreen = (props) => {
  // ---------------------- Destructuring --------------------
  const { menuOptions, selectedOption, musicSubMenu } =
    props;

  return (
    <div className="mainscreen">
      <Menubar
        menuOptions={menuOptions}
        musicSubMenu={musicSubMenu}
        selectedOption={selectedOption}
      />
      <Cover selectedOption={selectedOption} />
    </div>
  );
};

export default Mainscreen;
