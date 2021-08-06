import React from "react";
import "../Static/Screen.css";
import Mainscreen from "./Mainscreen";
import Optionscreen from "./Optionscreen";
import MusicMainScreen from "./musicSubMenuComponent/MusicMainScreen";
import Player from "./playerComponent/Player";

const Screen = (props) => {
  // -------------------------- Prop Destructuring ---------------
  const {
    menuOptions,
    selectedOption,
    musicSubMenu,
    subMenuSelectedOption,
    Play,
  } = props;

  const changeScreen = () => {
    if (selectedOption === 0) {
      return (
        <Mainscreen
          menuOptions={menuOptions}
          musicSubMenu={musicSubMenu}
          selectedOption={selectedOption}
          subMenuSelectedOption={subMenuSelectedOption}
        />
      );
    }

    if (selectedOption === 2 || selectedOption === 6 || selectedOption === 7) {
      return (
        <MusicMainScreen
          menuOptions={menuOptions}
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

    if (selectedOption === 5) {
      return <Player Play={Play} />;
    }
  };

  return <div className="screen">{changeScreen()}</div>;
};

export default Screen;
