import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import NightlightIcon from "@mui/icons-material/Nightlight";
import GTranslateIcon from "@mui/icons-material/GTranslate";

const RighNav = () => {
  return (
    <div className="flex flex-row items-center justify-between">
      <div className="items-center hidden  md:flex py-2 items-center justify-between mr-7">
        <div className="pt-1 md:px-1">
          <SearchIcon />
        </div>
        <div className="md:px-1">
          <NightlightIcon />
        </div>
        <div className="md:px-1">
          <GTranslateIcon />
        </div>
        <div className=" md:px-1">
          <button className="bg-gray-600 px-4 py-1 rounded text-white">
            Sign In
          </button>
        </div>
      </div>
      <div className="mt-2 inline-block md:hidden">
        <div className="px-1">
          <button className="hidden md:bg-gray-600 px-4 py-1 rounded text-white">
            Sign In
          </button>
        </div>
      </div>
      <div className="mt-1 px-1 md:px-1">
        <SearchIcon />
      </div>
    </div>
  );
};

export default RighNav;
