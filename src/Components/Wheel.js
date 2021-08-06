import React from "react";
import "../Static/Wheel.css";
import { FaFastBackward } from "react-icons/fa";
import { FaFastForward } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa";

const Wheel = (props) => {
  const { Play } = props;

  return (
    <div className="wheel" id="wheel">
      <div className="wheel-btns">
        <p id="menu-btn">MENU</p>
      </div>
      <FaFastForward className="forward-btn" />
      <FaFastBackward className="backward-btn" />
      <div className="center-btn" id="center-btn"></div>
      <div className="play-pause-btn" id="play-pause-btn">
        {Play ? <FaPause /> : <FaPlay />}
      </div>
    </div>
  );
};

export default Wheel;
