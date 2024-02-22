import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchJobs = createAsyncThunk("fetchjobs", async () => {
  try {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "f7b20ec548msh633330067e24a8fp13d31fjsn34024b1583e2",
        "X-RapidAPI-Host": "jobs-api14.p.rapidapi.com",
      },
    };

    const response = await fetch(
      "https://jobs-api14.p.rapidapi.com/list?query=Web%20Developer&location=United%20States&distance=1.0&language=en_GB&remoteOnly=false&datePosted=month&employmentTypes=fulltime%3Bparttime%3Bintern%3Bcontractor&index=0",
      options
    );
    return response.text();
  } catch (err) {
    console.log(err.message);
  }
});

const joblistslice = createSlice({
  name: "jobsearch",
  initialState: {
    isError: false,
    isLoading: false,
    data: null,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchJobs.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchJobs.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchJobs.rejected, (state, action) => {
      state.isError = true;
      console.log("Error", action.payload);
    });
  },
});

export default joblistslice.reducer;
