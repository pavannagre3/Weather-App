import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./WeatherApp.css";

import { fetchWeatherAction } from "../Features/WeatherSlice";
function WeatherApp() {
  const dispatch = useDispatch();
  const [city, setCity] = useState("New York");
  useEffect(async () => {
    dispatch(fetchWeatherAction(city));
  }, [dispatch]);
  const state = useSelector((state) => state?.weather);
  const { weather, loading, error } = state;

  return (
    <div>
      <section>
        <div>
          <select className="select" onChange={(e) => setCity(e.target.value)}>
            <option value="New York">New York</option>
            <option value="New Delhi">New Delhi</option>
            <option value="London">London</option>
            <option value="Tokyo">Tokyo</option>
            <option value="Colombo">Colombo</option>
            <option value="Mumbai">Mumbai</option>
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
          <h1>
            Loading please wait...
          </h1>
        ) : error ? (
          <h1 >{error?.message}</h1>
        ) : (
          <div >
            <h3>
              {weather?.name}, {weather?.sys?.country}
            </h3>
            <h1 >
              {weather?.weather[0].main}</h1>{" "}
            <h1>
              {Math.ceil(Number(weather?.main.temp))}{" "}
              <span>°C</span>
            </h1>

            <h3>humidity of {weather?.main?.humidity} %</h3>
          </div>
        )}
      </section>
    </div>
  );
}

export default WeatherApp;
