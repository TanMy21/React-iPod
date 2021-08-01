import React from "react";
import "../Static/Frame.css";
import Screen from "./Screen";
import Wheel from "./Wheel";
import ZingTouch from "zingtouch";
import coverflow from "../Static/assets/coverflow.png";
import gaming from "../Static/assets/gaming.png";
import headphones from "../Static/assets/headphones.png";
import settings from "../Static/assets/settings.png";

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
          img: coverflow,
          isActive: true,
        },
        {
          id: 2,
          title: "Music",
          img: headphones,
          isActive: false,
        },
        {
          id: 3,
          title: "Games",
          img: gaming,
          isActive: false,
        },
        {
          id: 4,
          title: "Settings",
          img: settings,
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
        this.menuButtonTap();
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
        this.centerButtonTap();
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
    const { menuOptions, musicSubMenu } = this.state;

    // get Index of Active Item for menuoptions main menu
    const mainIndex = menuOptions.findIndex((item) => item.isActive);
    menuOptions[mainIndex].isActive = false;

    // get Index of Active Item for Music Sub Menu
    const subIndex = musicSubMenu.findIndex((item) => item.isActive);
    musicSubMenu[subIndex].isActive = false;

    // if its a last item then make first item As Active for menuoptions main menu
    if (mainIndex === menuOptions.length - 1) {
      menuOptions[0].isActive = true;
    } else {
      // select next item as Active
      menuOptions[mainIndex + 1].isActive = true;
    }

    // if its a last item then make first item As Active for Music Sub Menu
    if (subIndex === musicSubMenu.length - 1) {
      musicSubMenu[0].isActive = true;
    } else {
      // select next item as Active
      musicSubMenu[subIndex + 1].isActive = true;
    }

    this.setState({
      menuOptions: menuOptions,
      musicSubMenu: musicSubMenu,
    });
  };

  // function to change active option rotating clockwise
  rotateAntiClockwise = () => {
    const { menuOptions, musicSubMenu } = this.state;

    // get Index of Active Item for Main Menu
    const mainIndex = menuOptions.findIndex((item) => item.isActive);
    menuOptions[mainIndex].isActive = false;

    // get Index of Active Item for Music Sub Menu
    const subIndex = musicSubMenu.findIndex((item) => item.isActive);
    musicSubMenu[subIndex].isActive = false;

    // if it's a first item then make last item as active Main Sub Menu
    if (mainIndex === 0) {
      menuOptions[menuOptions.length - 1].isActive = true;
    } else {
      // select prv item as active
      menuOptions[mainIndex - 1].isActive = true;
    }

    // if it's a first item then make last item as active Music Sub Menu
    if (subIndex === 0) {
      musicSubMenu[musicSubMenu.length - 1].isActive = true;
    } else {
      // select prv item as active
      musicSubMenu[subIndex - 1].isActive = true;
    }

    this.setState({
      menuOptions: menuOptions,
      musicSubMenu: musicSubMenu,
    });
  };

  centerButtonTap = () => {
    const { menuOptions } = this.state;
    const index = menuOptions.findIndex((item) => item.isActive);
    let id;
    const lt = menuOptions.length;

    if (lt === 4) {
      id = index + 1;
    }

    if (lt === 3) {
      id = index + 5;
    }

    if (id === 2) {
      this.setState({
        selectedOption: id,
        // prevMenu: menuOptions,
        // menuOptions: musicSubMenu,
      });
    }

    this.setState({
      selectedOption: id,
    });
  };

  menuButtonTap = () => {
    // const { enu, menuOptions } = this.state;

    this.setState({
      selectedOption: 0,
      menuOptions: [
        {
          id: 1,
          title: "Coverflow",
          img: coverflow,
          isActive: true,
        },
        {
          id: 2,
          title: "Music",
          img: headphones,
          isActive: false,
        },
        {
          id: 3,
          title: "Games",
          img: gaming,
          isActive: false,
        },
        {
          id: 4,
          title: "Settings",
          img: settings,
          isActive: false,
        },
      ],
    });
  };

  render() {
    //-------------------------- destructuring ------------------
    const { menuOptions, selectedOption, musicSubMenu } = this.state;

    return (
      <div className="frame">
        <Screen
          menuOptions={menuOptions}
          musicSubMenu={musicSubMenu}
          selectedOption={selectedOption}
        />
        <Wheel />
      </div>
    );
  }
}

export default Frame;
