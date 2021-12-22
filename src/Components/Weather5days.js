import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./WeatherApp.css";

import { fetchWeatherAction } from "../Features/WeatherSlice";
function Weather5days() {
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
          <h1>Loading please wait...</h1>
        ) : error ? (
          <h1>{error?.message}</h1>
        ) : (
          <div>
            <div>
              <h1>{weather?.weather[0].main}</h1>{" "}
            </div>
            <h1>
              {Math.ceil(Number(weather?.main.temp))} <span>°C</span>
            </h1>
            <h3>
              {weather?.name}, {weather?.sys?.country}
            </h3>
            <p>
              The weather condition in {weather?.name}, {weather?.sys?.country}{" "}
              is described as : {weather?.weather[0].description} with a
              temperature of {Math.ceil(Number(weather?.main.temp))} °C and a
              humidity of {weather?.main?.humidity} %
            </p>{" "}
          </div>
        )}
      </section>
    </div>
  );
}

export default Weather5days;
