import React from "react";
import "../../Static/Cover.css";
import wallcover2 from "../../Static/assets/disc.jpg";

const MusicCover = (props) => {
  return (
    <div className="cover">
      <div className="cover-image">
        <img src={wallcover2} alt="cover" id="song-image" />
      </div>
    </div>
  );
};

export default MusicCover;
