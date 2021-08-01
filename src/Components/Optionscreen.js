import React from "react";
import "../Static/Optionscreen.css";

const Optionscreen = (props) => {
  const { menuOptions, selectedOption } = props;

  return (
    <div className="options-screen">
      <div className="opt-screen">
        <div className="menu-option-image">
          <img
            src={menuOptions[selectedOption - 1].img}
            alt="gaming"
            className="option-image"
          />
        </div>
        <div className="option-text">
          <p>{menuOptions[selectedOption - 1].title}</p>
        </div>
      </div>
    </div>
  );
};

export default Optionscreen;
