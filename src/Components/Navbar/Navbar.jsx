import React from "react";
import "./navbar.css";
import Navleft from "./LeftNav/Navleft";
import RighNav from "./RightNav/RighNav";

const Navbar = () => {
  return (
    <div className="w-screen flex flex-row bg-white-900 opacity-100 justify-between items-center sticky top-0 z-50 py-2">
      <Navleft />
      <div className="inline-block md:navbar">
        <img
          src="https://media.geeksforgeeks.org/gfg-gg-logo.svg"
          className="position relative left-5 mt-2 md:mt-2 relative left-[-50px]"
          alt="Logo"
        />
      </div>
      <div>
        <RighNav />
      </div>
    </div>
  );
};

export default Navbar;
