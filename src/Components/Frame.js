import React from "react";
import "../Static/Frame.css";
import Screen from "./Screen";
import Wheel from "./Wheel";

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
