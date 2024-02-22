import React from "react";
import ApartmentIcon from "@mui/icons-material/Apartment";
import ScheduleIcon from "@mui/icons-material/Schedule";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const JobCard = (props) => {
  function shortenString(str, maxLength) {
    if (str.length <= maxLength) {
      return str;
    } else {
      return str.slice(0, maxLength - 3) + "...";
    }
  }
  const { job } = props;
  console.log(job.image);
  return (
    <>
      <div className="flex flex-col border border-black-900 w-28 px-1 md:flex flex-col border border-black-900 w-96 px-8 py-4 rounded">
        <div className="">
          <div className="flex flex-row content-start justify-evenly ">
            <div>
              <img className="w-12 md:w-24" src={job.image} alt="" srcset="" />
            </div>
            <div className=" md:px-1">
              <div>
                <p className="text-sm md:text-base">
                  {shortenString(`${job.title}`, 20)}
                </p>
              </div>
              <div>
                <p className="text-sm md:mt-1 text-xs text-gray-700">
                  {job.company}
                </p>
              </div>
              <div className="flex flex-row content-between md:flex flex-row mt-2 content-between">
                <div className="flex flex-row">
                  <ApartmentIcon style={{ fontSize: "15px" }} />
                  <p className="md: inline-block text-xs">
                    {shortenString(`${job.employmentType}`, 15)}
                  </p>
                </div>
                <div className="flex flex-row ml-2">
                  <ScheduleIcon style={{ fontSize: "15px" }} />
                  <p className="md:inline-block text-xs">{job.datePosted}</p>
                </div>
                <div className="flex flex-row ml-2">
                  <LocationOnIcon style={{ fontSize: "15px" }} />
                  <p className="md: inline-block text-xs">{job.location}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row mt-4 justify-between items-center">
          <div>
            <p className="text-xs md:text-xs text-gray-700 font-bold">
              Apply Soon!
            </p>
          </div>
          <div>
            <button className="text-xs px-1 py-1 md:text-xs text-green-700 font-bold border border-green-900 px-3 py-2">
              Apply Now!
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobCard;
