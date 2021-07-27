import React from "react";
import "../Static/Cover.css";
import wallcover from "../Static/assets/wallpaper.jpg";

const Cover = (props) => {
  return (
    <div className="cover">
      <div className="cover-image">
        <img src={wallcover} alt="cover" className="song-image" />
      </div>
    </div>
  );
};

export default Cover;
