import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const ApiKey = "ce9d642e471b47b8b5b12a0d8a55db11";

export const fetchWeather = createAsyncThunk(
  "weatherSlice/fetchWeather",
  async (city) => {
    const res = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${ApiKey}`
    );

    return res.data.list;
  }
);

const weatherSlice = createSlice({
  initialState: [],
  name: "weatherSlice",
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchWeather.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const {} = weatherSlice.actions;

export default weatherSlice.reducer;
