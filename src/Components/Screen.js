import React from "react";
import "../Static/Screen.css";
import Mainscreen from "./Mainscreen";
import Optionscreen from "./Optionscreen";

const Screen = (props) => {
  // -------------------------- Prop Destructuring ---------------
  const { menuOptions, selectedOption, musicSubMenu } = props;

  const changeScreen = () => {
    if (selectedOption === 0 || selectedOption === 2) {
      return (
        <Mainscreen
          menuOptions={menuOptions}
          musicSubMenu={musicSubMenu}
          selectedOption={selectedOption}
        />
      );
    }

    if (selectedOption === 1 || selectedOption === 3 || selectedOption === 4) {
      return (
        <Optionscreen
          menuOptions={menuOptions}
          selectedOption={selectedOption}
        />
      );
    }
  };

  return <div className="screen">{changeScreen()}</div>;
};

export default Screen;
