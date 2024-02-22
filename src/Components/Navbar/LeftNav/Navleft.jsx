import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MenuIcon from "@mui/icons-material/Menu";
const Navleft = () => {
  return (
    <>
      <div className=" hidden md:flex ml-4 items-end">
        <div>
          <div>
            <p className="bg-indigo-700 rounded-sm px-1 py-px text-xs text-white">
              Get 90% refund
            </p>
          </div>
          <div className="flex items-center cursor-pointer">
            <a href="/course">Course</a>
            <KeyboardArrowDownIcon />
          </div>
        </div>
        <div className="flex mr-4 items-center cursor-pointer">
          <a href="/course">Tutorials</a>
          <KeyboardArrowDownIcon />
        </div>
        <div className="flex mr-4 items-center cursor-pointer">
          <a href="/course">Jobs</a>
          <KeyboardArrowDownIcon />
        </div>
        <div className="flex mr-4 items-center cursor-pointer">
          <a href="/course">Practice</a>
          <KeyboardArrowDownIcon />
        </div>
        <div className="flex items-center cursor-pointer">
          <a href="/course">Contests</a>
          <KeyboardArrowDownIcon />
        </div>
      </div>
      <div className="ml-2 md:hidden cursor-pointer">
        <MenuIcon style={{ fontSize: 40, color: "gray" }} />
      </div>
    </>
  );
};

export default Navleft;
