import { configureStore } from "@reduxjs/toolkit";
import joblist from "./Slice/joblist";

const store = configureStore({
  reducer: {
    job: joblist,
  },
});

export default store;
