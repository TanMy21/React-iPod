import React from "react";
import "../Static/Frame.css";
import Screen from "./Screen";
import Wheel from "./Wheel";
import ZingTouch from "zingtouch";

class Frame extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: 0,
      prevMenu: [],
      Play: false,
      menuOptions: [
        {
          id: 1,
          title: "Coverflow",
          isActive: true,
        },
        {
          id: 2,
          title: "Music",
          isActive: false,
        },
        {
          id: 3,
          title: "Games",
          isActive: false,
        },
        {
          id: 4,
          title: "Settings",
          isActive: false,
        },
      ],
      musicSubMenu: [
        {
          id: 5,
          title: "All Songs",
          isActive: true,
        },
        {
          id: 6,
          title: "Artists",
          isActive: false,
        },
        {
          id: 7,
          title: "Albums",
          isActive: false,
        },
      ],
    };
  }

  componentDidMount() {
    // ------------- ZingTouch for rotate gesture ------------------------

    var rotateArea = document.getElementById("wheel");

    var rotateRegion = new ZingTouch.Region(rotateArea);

    rotateRegion.bind(
      rotateArea,
      "rotate",
      (e) => {
        if (e.detail.distanceFromLast >= 4) {
          console.log('Down');
        }

        if (e.detail.distanceFromLast <= -4) {
          console.log('Up');
        }
      },
      false
    );

    // ------------- ZingTouch for tap gesture for Menu Button ------------------------

    var menuTapArea = document.getElementById("menu-btn");

    var menuTapRegion = new ZingTouch.Region(menuTapArea);

    menuTapRegion.bind(
      menuTapArea,
      "tap",
      (e) => {
        console.log('Menu Button Tapped');
      },
      false
    );

    // ------------- ZingTouch for tap gesture for Center Button ------------------------

    var centerButtonTapArea = document.getElementById("center-btn");

    var centerButtonTapRegion = new ZingTouch.Region(centerButtonTapArea);

    centerButtonTapRegion.bind(
      centerButtonTapArea,
      "tap",
      (e) => {
        console.log('Center Button Tapped');
      },
      false
    );

    // ------------- ZingTouch for tap gesture for Play Pause Button ------------------------

    var playPauseButtonTapArea = document.getElementById("play-pause-btn");

    var playPauseButtonTapRegion = new ZingTouch.Region(playPauseButtonTapArea);

    playPauseButtonTapRegion.bind(
      playPauseButtonTapArea,
      "tap",
      (e) => {
        console.log('Play Button Tapped');
      },
      false
    );
  }

  render() {
    //-------------------------- destructuring ------------------
    const { menuOptions } = this.state;

    return (
      <div className="frame">
        <Screen menuOptions={menuOptions} />
        <Wheel />
      </div>
    );
  }
}

export default Frame;
