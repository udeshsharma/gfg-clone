import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div
      className="sm:w-2xl md:w-full bg-cover bg-top h-screen customclass"
      style={{
        backgroundImage:
          "url(https://media.geeksforgeeks.org/img-practice/prod/jobs/1/Web/Other/jobs%20background%20light%20mode_1707971917.svg)",
      }}
    >
      <div className="text-xs  flex place-content-center py-2 md:py-2 bg-green-700 text-center text-white">
        <p className="md:hidden">Recruiters, Join Our.....</p>
        <p className="hidden md:inline-block ml-6 text-sm font-semibold">
          Recruiters, join our Hiring Challenge to connect with exceptional
          global talent. Don't miss out, participate now!
        </p>
        <button className=" text-xs ml-3 md:ml-2 border px-1 text-sm rounded semibold cursor-pointer">
          Hire with Us!
        </button>
      </div>
      <div>
        <div className="text-center">
          <h1 className="px-3 text-2xl mt-4 md:text-4xl tracking-widest mt-10 font-bold">
            Get hired with <span className="text-lime-900">GfG Job fair</span>
          </h1>
        </div>
        <div className="flex mt-3 md:flex place-content-center mt-5 ">
          <div>
            <p className="items-center">powered by</p>
          </div>
          <div>
            <img
              className="items-center"
              src="https://media.geeksforgeeks.org/img-practice/prod/jobs/1/Web/Header/Vector%20(1)_1699598913.svg"
              alt="indeed"
            />
          </div>
        </div>

        <div className="flex justify-center mt-4 md:flex justify-center mt-8 place-content-center">
          <div className="ml-3 text-center px-1 md:text-center col-span-1 px-1">
            <h3 className=" text-sm  md:text-2xl font-bold">150+ </h3>
            <p className="text-xs md:text-slate-700">Organisations</p>
          </div>
          <div className="text-center md:text-center col-span-1 px-1">
            <h3 className=" text-sm md:text-2xl font-bold">200+ </h3>
            <p className="text-xs md:text-slate-700">Job Openings</p>
          </div>
          <div className=" text-center md:text-center col-span-1 px-1">
            <div>
              <h3 className="text-sm md:text-2xl font-bold">6 LPA </h3>
            </div>
            <div>
              <p className="text-xs md:text-slate-700">Average Package</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
