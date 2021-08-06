import React, { useState, useRef, useEffect } from "react";
import "../../Static/Player.css";
import Nowplaying from "./Nowplaying";
import SongInfo from "./SongInfo";
import Slider from "./Slider";
import Duration from "./Duration";
import song from "../../Static/assets/song.mp3";

const Player = (props) => {
  const { Play } = props;

  const [percentage, setPercentage] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const audioRef = useRef();

  const onChange = (e) => {
    const audio = audioRef.current;
    audio.currentTime = (audio.duration / 100) * e.target.value;
    setPercentage(e.target.value);
  };

  const play = () => {
    const audio = audioRef.current;
    audio.volume = 0.5;

    if (Play) {
      audio.play();
    }
    if (!Play) {
      audio.pause();
    }
  };
  const getCurrDuration = (e) => {
    const percent = (
      (e.currentTarget.currentTime / e.currentTarget.duration) *
      100
    ).toFixed(2);
    const time = e.currentTarget.currentTime;

    setPercentage(+percent);
    setCurrentTime(time.toFixed(2));
  };

  useEffect(() => {
    if (Play) {
      play();
    } else {
      play();
    }
  });

  return (
    <div className="player-screen">
      <div className="play-screen">
        <div className="navbar">
          <Nowplaying Play={Play} />
        </div>
        <div className="song-info">
          <SongInfo />
        </div>
        <div className="player-controls">
          <Slider percentage={percentage} onChange={onChange} />
          <Duration duration={duration} currentTime={currentTime} />
          <audio
            ref={audioRef}
            onTimeUpdate={getCurrDuration}
            onLoadedData={(e) => {
              setDuration(e.currentTarget.duration.toFixed(2));
            }}
            src={song}
          ></audio>
        </div>
      </div>
    </div>
  );
};

export default Player;
