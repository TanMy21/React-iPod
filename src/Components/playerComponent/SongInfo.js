import React from "react";
import "../../Static/Player.css";
// import song from "https://upload.wikimedia.org/wikipedia/en/5/57/Something_Just_Like_This.png";
import { FaStar } from "react-icons/fa";

const SongInfo = (props) => {
  return (
    <div>
      <div className="song-cover-img">
        <img src="https://upload.wikimedia.org/wikipedia/en/5/57/Something_Just_Like_This.png" alt="" id="song-cover-image" />
      </div>
      <div className="song-metadata">
        <marquee direction="left" scrollamount="4">
          <p id="song-name"> Something Just Like This</p>
          <p id="artist-name"> The Chainsmokers </p>
        </marquee>
        <p className="star">
          <FaStar id="star" /> <FaStar id="star" /> <FaStar id="star" />{" "}
          <FaStar id="star" /> <FaStar />
        </p>
      </div>
    </div>
  );
};

export default SongInfo;
