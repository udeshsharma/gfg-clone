import React from "react";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Footer = () => {
  return (
    <div className="bottom-0 mx-auto flex flex-col mt-5 md:flex-row items-baseline bottom-0 border-t-2 w-full mx-auto max-w-8xl">
      <div className="md:flex w-3/7">
        <div className="md:flex flex-col justify-items-center pl-6">
          <div className="md:ml-6 mt-4">
            <img
              src="https://media.geeksforgeeks.org/auth-dashboard-uploads/gfgFooterLogo.png"
              alt="Geeks for Geeks logo"
            />
          </div>
          <div className="text-xs ml-[-20px] md:max-w-xl flex content-center pt-4">
            <div className="text-green-950 max-h-2">
              <LocationOnOutlinedIcon className="h-1" />
            </div>
            <div>
              <p className="">
                A-143, 9th Floor, Sovereign Corporate <br /> Tower, Sector-136,
                Noida, Uttar Pradesh - 201305
              </p>
            </div>
          </div>

          <div className="grid grid-cols-5 mx-auto ml-[-10px] md:w-48 ml-8 grid grid-cols-5 gap-0 mt-4">
            <FacebookOutlinedIcon />
            <InstagramIcon />
            <LinkedInIcon />
            <XIcon />
            <YouTubeIcon />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 ml-8 mx-5 mt-14 gap-x-12 md:grid-cols-5 gap-x-28 gap-y-6 mt-3">
        <div className="company">
          <h4 className="text-green-950 font-bold">Company</h4>
          <ul className="mt-1">
            <li className="text-gray-500">About Us</li>
            <li className="text-gray-500">Legal</li>
            <li className="text-gray-500">Careers</li>
            <li className="text-gray-500">In Media</li>
            <li className="text-gray-500">Contact Us</li>
            <li className="text-gray-500">Advertise with Us </li>
          </ul>
        </div>
        <div className="company">
          <h4 className="md:text-green-950 font-bold">Company</h4>
          <ul className="mt-1">
            <li className="text-gray-500">About Us</li>
            <li className="text-gray-500">Legal</li>
            <li className="text-gray-500">Careers</li>
            <li className="text-gray-500">In Media</li>
            <li className="text-gray-500">Contact Us</li>
            <li className="text-gray-500">Advertise with Us </li>
          </ul>
        </div>
        <div className="company">
          <h4 className="text-green-950 font-bold">Company</h4>
          <ul className="mt-1">
            <li className="text-gray-500">About Us</li>
            <li className="text-gray-500">Legal</li>
            <li className="text-gray-500">Careers</li>
            <li className="text-gray-500">In Media</li>
            <li className="text-gray-500">Contact Us</li>
            <li className="text-gray-500">Advertise with Us </li>
          </ul>
        </div>
        <div className="company">
          <h4 className="text-green-950 font-bold">Company</h4>
          <ul className="mt-1">
            <li className="text-gray-500">About Us</li>
            <li className="text-gray-500">Legal</li>
            <li className="text-gray-500">Careers</li>
            <li className="text-gray-500">In Media</li>
            <li className="text-gray-500">Contact Us</li>
            <li className="text-gray-500">Advertise with Us </li>
          </ul>
        </div>
        <div className="company">
          <h4 className="text-green-950 font-bold">Company</h4>
          <ul className="mt-1">
            <li className="text-gray-500">About Us</li>
            <li className="text-gray-500">Legal</li>
            <li className="text-gray-500">Careers</li>
            <li className="text-gray-500">In Media</li>
            <li className="text-gray-500">Contact Us</li>
            <li className="text-gray-500">Advertise with Us </li>
          </ul>
        </div>
        <div className="company">
          <h4 className="text-green-950 font-bold">Company</h4>
          <ul className="mt-1">
            <li className="text-gray-500">About Us</li>
            <li className="text-gray-500">Legal</li>
            <li className="text-gray-500">Careers</li>
            <li className="text-gray-500">In Media</li>
            <li className="text-gray-500">Contact Us</li>
            <li className="text-gray-500">Advertise with Us </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
