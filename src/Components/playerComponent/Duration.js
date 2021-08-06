import React from "react";
import "../../Static/Player.css";

const Duration = (props) => {
  const { currentTime, duration } = props;

  function secondsToHms(seconds) {
    if (!seconds) return "0:00";

    let duration = seconds;
    let hours = duration / 3600;
    duration = duration % 3600;

    let min = parseInt(duration / 60);
    duration = duration % 60;

    let sec = parseInt(duration);

    if (sec < 10) {
      sec = `0${sec}`;
    }
    if (min < 10) {
      min = `0${min}`;
    }

    if (parseInt(hours, 10) > 0) {
      return `${parseInt(hours, 10)}h ${min}m ${sec}s`;
    } else if (min === 0) {
      return `00:${sec}`;
    } else {
      return `${min}:${sec}`;
    }
  }

  return (
    <div className="control-panel">
      <div className="startTime">{secondsToHms(currentTime)}</div>
      <div className="endTime">{secondsToHms(duration)}</div>
    </div>
  );
};

export default Duration;
