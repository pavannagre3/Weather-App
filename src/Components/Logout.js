import React from "react";
import "./Logout.css";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { logout, selectUser } from "../Features/userSlice";
import WeatherApp from "./WeatherApp";

const Logout = () => {
  const user = useSelector(selectUser);

  const dispatch = useDispatch();
  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
  };

  return (
    <div className="logout">
      <h2>
        Please select city name to get the current weather detail
      </h2>
      <WeatherApp />
      <button className="logout_button" onClick={(e) => handleLogout(e)}>
        Logout
      </button>
    </div>
  );
};

export default Logout;
