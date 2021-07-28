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
          this.rotateClockwise();
        }

        if (e.detail.distanceFromLast <= -4) {
          this.rotateAntiClockwise();
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
        console.log("Menu Button Tapped");
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
        console.log("Center Button Tapped");
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
        console.log("Play Button Tapped");
      },
      false
    );
  }

  // function to change active option rotating clockwise
  rotateClockwise = () => {
    
    const { menuOptions } = this.state;

    console.log(menuOptions);
    // get Index of Active Item
    const index = menuOptions.findIndex((item) => item.isActive);
    menuOptions[index].isActive = false;

    // if its a last item then make first item As Active
    if (index === menuOptions.length - 1) {
      menuOptions[0].isActive = true;
    } else {
      // select next item as Active
      menuOptions[index + 1].isActive = true;
    }

    this.setState({
      menuOptions: menuOptions,
    });
  };

  // function to change active option rotating clockwise
  rotateAntiClockwise = () => {
    const { menuOptions } = this.state;

    // get Index of Active Item
    const index = menuOptions.findIndex((item) => item.isActive);
    menuOptions[index].isActive = false;

    // if it's a first item then make last item as active
    if (index === 0) {
      menuOptions[menuOptions.length - 1].isActive = true;
    } else {
      // select prv item as active
      menuOptions[index - 1].isActive = true;
    }

    this.setState({
      menuOptions: menuOptions,
    });
  };

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
