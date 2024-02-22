import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import LensIcon from "@mui/icons-material/Lens";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { useSelector, useDispatch } from "react-redux";
import { fetchJobs } from "../../Slice/joblist";
import JobCard from "./JobCard";

export default function JobSections() {
  const [value, setValue] = React.useState("All Jobs");
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(fetchJobs());
  }, []);
  const data = useSelector((state) => state?.job?.data);
  const dataparsed = JSON.parse(data);
  const jobs = dataparsed?.jobs;
  console.log(jobs);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="mt-[-50px] w-2/3  md:ml-10 w-5/6">
      <Box
        marginLeft={5}
        marginTop={8}
        sx={{ width: "100%", typography: "body1" }}
      >
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab
                label="All Jobs"
                style={{
                  opacity: value === "All Jobs" ? 1 : 0.5,
                  fontSize: 12,
                }}
                value="All Jobs"
              ></Tab>
              <Tab
                label="Featured Jobs"
                style={{
                  opacity: value === "Featured jobs" ? 1 : 0.5,
                  fontSize: 12,
                }}
                value="Featured Jobs"
              />
              <div className="flex text-xs">
                <LensIcon
                  style={{
                    fontSize: "8px",
                    marginLeft: "-12px",
                    marginBottom: "-20px",
                  }}
                  color="primary"
                  className=""
                />
              </div>
              <Tab
                label="Applied Jobs"
                style={{
                  opacity: value === "Applied Jobs" ? 1 : 0.5,
                  fontSize: 12,
                }}
                value="Applied Jobs"
              />
              <Tab
                label="Archived Jobs"
                style={{
                  opacity: value === "Archived Jobs" ? 1 : 0.5,
                  fontSize: 12,
                }}
                value="Archived Jobs"
              />

              <FilterAltIcon className="hidden md:absolute text-green-950 top-2 end-12" />
              <div className="hidden md:absolute top-2 end-1">Filter</div>
            </TabList>
          </Box>
          <TabPanel value="All Jobs">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-32 gap-y-8">
              {jobs?.map((job) => {
                return <JobCard job={job} />;
              })}
            </div>
          </TabPanel>
          <TabPanel value="Featured Jobs">Featured Jobs</TabPanel>
          <TabPanel value="Applied Jobs">Applied Jobs</TabPanel>
          <TabPanel value="Archived Jobs">Archived Jobs</TabPanel>
        </TabContext>
      </Box>
      {}
    </div>
  );
}
