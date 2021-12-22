import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./WeatherApp.css";
import Weather5days from "./Weather5days";

import { fetchWeatherAction } from "../Features/WeatherSlice";
function WeatherApp() {
  const dispatch = useDispatch();
  const [city, setCity] = useState("New Delhi");
  useEffect(async () => {
    dispatch(fetchWeatherAction(city));
  }, [dispatch]);
  const state = useSelector((state) => state?.weather);
  const { weather, loading, error } = state;

  return (
    <div>
      <section>
        <div>
          <h2>Select city</h2>
          <select onChange={(e) => setCity(e.target.value)}>
            <option value="New Delhi">New Delhi</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Kolkata">Kolkata</option>
            <option value="Channai">Channai</option>
            <option value="Lucknow">Lucknow</option>
            <option value="Hyderabad">Hyderabad</option>
          </select>
          <button
            onClick={() => dispatch(fetchWeatherAction(city))}
            type="button"
            className="search-btn"
          >
            Search
          </button>
        </div>
        {loading ? (
          <h1 class="text-gray-400 text-3xl text-center">
            Loading please wait...
          </h1>
        ) : error ? (
          <h1 class="text-red-400 text-3xl text-center">{error?.message}</h1>
        ) : (
          <div class="max-w-6xl px-4 mx-auto ">
            <div class="flex justify-start  items-center">
              <h1 class="text-gray-300 pl-5">{weather?.weather[0].main}</h1>{" "}
            </div>
            <h1 class="text-gray-300 text-center text-4xl mb-10">
              {Math.ceil(Number(weather?.main.temp))}{" "}
              <span class="text-yellow-500 text-4xl">°C</span>
            </h1>
            <h3 class="mb-6 text-xl text-white font-semibold">
              {weather?.name}, {weather?.sys?.country}
            </h3>
            <p class="mb-8 text-gray-300">
              The weather condition in {weather?.name}, {weather?.sys?.country}{" "}
              is described as : {weather?.weather[0].description} with a
              temperature of {Math.ceil(Number(weather?.main.temp))} °C and a
              humidity of {weather?.main?.humidity} %
            </p>{" "}
          </div>
        )}
      </section>
      <Weather5days />
    </div>
  );
}

export default WeatherApp;
