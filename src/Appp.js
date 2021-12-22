import "./App.css";
import LoginPage from "./Components/Login";
import LogOut from "./Components/Logout";
import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "./Features/userSlice";

function App() {
  const user = useSelector(selectUser);
  return <div>{user ? <LogOut /> : <LoginPage />}</div>;
}

export default App;
