import React from "react";
import "../../Static/Menubar.css";

const MusicMenulist = (props) => {
  const { item } = props;
  const { isActive } = item;

  return isActive ? (
    <li id="menu-selected">{item.title}</li>
  ) : (
    <li>{item.title}</li>
  );
};

export default MusicMenulist;
