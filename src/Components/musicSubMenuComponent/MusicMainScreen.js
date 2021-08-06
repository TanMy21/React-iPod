import React from "react";
import "../../Static/Mainscreen.css";
import MusicMenubar from "./MusicMenuBar";
import MusicCover from "./MusicCover";

const Mainscreen = (props) => {
  // ---------------------- Destructuring --------------------
  const { menuOptions, selectedOption } = props;

  return (
    <div className="mainscreen">
      <MusicMenubar menuOptions={menuOptions} selectedOption={selectedOption} />
      <MusicCover selectedOption={selectedOption} />
    </div>
  );
};

export default Mainscreen;
