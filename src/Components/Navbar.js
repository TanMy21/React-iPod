import React from "react";
import "../Static/Navbar.css";
import { IoIosBatteryFull } from "react-icons/io";
import { GoTriangleRight } from "react-icons/go";

const Navbar = (props) => {
  return (
    <div className="nav-container">
      <div className="now-playing">
        <p>
          <b>iPod</b>
        </p>
      </div>
      <div className="battery">
        <GoTriangleRight />
        <IoIosBatteryFull />
      </div>
    </div>
  );
};

export default Navbar;
