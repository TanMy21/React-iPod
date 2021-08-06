import React from "react";
import "../../Static/Menubar.css";
import Menulist from "../Menulist";
import Navbar from "../Navbar";

const MusicMenubar = (props) => {
  // ---------------------- Destructuring --------------------
  const { menuOptions } = props;

  return (
    <div className="menubar">
      <div className="menu-navbar">
        <Navbar />
      </div>
      <div id="menu">
        <div className="menu-option">
          <ul>
            {/* ----------------- Render Menu Options as a List -------------------- */}
            {menuOptions.map((item) => {
              return <Menulist item={item} key={item.id} />;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MusicMenubar;
