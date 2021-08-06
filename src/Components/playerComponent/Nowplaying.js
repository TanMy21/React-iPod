import React from "react";
import "../../Static/Player.css";
import { FaBatteryFull } from "react-icons/fa";
import { FaPause } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";

const Nowplaying = (props) => {
  const { Play } = props;

  return (
    <div className="navbar">
      <div id="now-playing">
        <p>{Play ? <b>Now Playing</b> : <b></b>}</p>
      </div>
      <div>
        {Play ? (
          <div id="pause">
            <FaPause />
          </div>
        ) : (
          <div id="play">
            <FaPlay />
          </div>
        )}
      </div>
      <div id="battery">
        <FaBatteryFull />
      </div>
    </div>
  );
};

export default Nowplaying;
