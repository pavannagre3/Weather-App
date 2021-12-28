import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../Features/userSlice";
import weather from "../Features/WeatherSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    weather: weather,
  },
});

export default store;
