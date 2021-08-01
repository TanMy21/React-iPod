import React from "react";
import Navbar from "../Navbar";
import "../../Static/Menubar.css";
import Menulist from "../Menulist";

const Music = (props) => {
  const menuOptions = props;

  return (
    <div className="menubar">
      <div className="menu-navbar">
        <Navbar />
      </div>
      <div className="menu">
        <div className="menu-option">
          <ul>
            { menuOptions.menuOptions.map((item) => {
              return <Menulist item={item} key={item.id} />;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Music;
