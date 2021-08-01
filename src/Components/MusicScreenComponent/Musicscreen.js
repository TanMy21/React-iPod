import React from "react";
import Music from "./Music";
import Musiccover from './MusicCover';

const Musicscreen = (props) => {
  const { menuOptions } = props;

  return (
    <div>
      <Music menuOptions={menuOptions} />
      <Musiccover />
    </div>
  );
};

export default Musicscreen;
