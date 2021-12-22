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


// import { configureStore } from "@reduxjs/toolkit";
// import weather from "../slices/weatherSlices";
// const store = configureStore({
//   reducer: {
//     weather: weather,
//   },
// });

// export default store;
