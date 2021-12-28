import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../Features/userSlice";
import "./Login.css";

const LoginPage = () => {
  const [userid, setUserid] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const AdminUser = {
    userid: "pavannagre3",
    password: "Pavan123@",
  };

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if ((userid === AdminUser.userid) && (password === AdminUser.password)) {
      dispatch(
        login({
          name: AdminUser.userid,
          password: AdminUser.password,
          loggedIn: true,
        })
      )
    }
    else {
      alert("Invalid UserId, Email, password")
    }
    ;
  };
  return (
    <div className="container">
      <form className="login-form" onSubmit={(e) => handleSubmit(e)}>
        <h1>Input credentials</h1>
        <input
          type="name"
          placeholder="User Id"
          value={userid}
          onChange={(e) => setUserid(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="submit-btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
