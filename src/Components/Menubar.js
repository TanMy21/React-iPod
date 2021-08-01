import React from "react";
import "../Static/Menubar.css";
import Menulist from "./Menulist";
import Navbar from "./Navbar";

const Menubar = (props) => {
  // ---------------------- Destructuring --------------------
  const { menuOptions, selectedOption, musicSubMenu } = props;
  // console.log(selectedOption);

  const changeMenu = () => {
    if (selectedOption === 0) {
      return (
        <div className="menu-option">
          <ul>
            {/* ----------------- Render Menu Options as a List -------------------- */}
            {menuOptions.map((item) => {
              return <Menulist item={item} key={item.id} />;
            })}
          </ul>
        </div>
      );
    }

    if (selectedOption === 2) {
      return (
        <div className="menu-option">
          <ul>
            {/* ----------------- Render Menu Options as a List -------------------- */}
            {musicSubMenu.map((item) => {
              return <Menulist item={item} key={item.id} />;
            })}
          </ul>
        </div>
      );
    }
  };

  return (
    <div className="menubar">
      <div className="menu-navbar">
        <Navbar />
      </div>
      <div className="menu">{changeMenu()}</div>
    </div>
  );
};

export default Menubar;
