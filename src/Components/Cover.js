import React from "react";
import "../Static/Cover.css";
import wallcover1 from "../Static/assets/wallpaper.jpg";
import wallcover2 from "../Static/assets/disc.jpg";


const Cover = (props) => {

  const { selectedOption } = props;

  const changeCover = () => {
    if(selectedOption === 2){
      return(<img src={wallcover2} alt="cover" className="song-image" />);
    }else{
      return(<img src={wallcover1} alt="cover" className="song-image" />);
    }
  }

  return (
    <div className="cover">
      <div className="cover-image">
        {changeCover()}
      </div>
    </div>
  );
};

export default Cover;
