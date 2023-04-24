import { configureStore } from "@reduxjs/toolkit";
import WeatherSlice from "./Slices/weatherSlice";

export const store = configureStore({
  reducer: {
    weather: WeatherSlice,
  },
});
