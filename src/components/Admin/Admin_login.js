import React, { useState, useEffect } from "react";
import "./Admin_login.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const LoginPage = () => {
  const navigate = useNavigate();
  const [valid, isValid] = useState("false");
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  //Check user logged in
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const logincheck = async () => {
    try {
      let response = await axios.post(
        "http://localhost:5000/admin_login",
        user
      );

      if (response && response.data.body._id) {
        isValid("true");
        localStorage.setItem("login", true);
        localStorage.setItem("UserName", response.data.body.Name);
        localStorage.setItem("Email", response.data.body.Email);
      } else {
        alert("Invalid Credentials");
      }
    } catch (err) {
      alert("Invalid Credentials..");
      console.log(err);
    }
  };

  let login = "";
  useEffect(() => {
    login = localStorage.getItem("login");

    if (login === "true") {
      navigate("/dashboarditem");
    } else {
      console.log("Unsec");
    }
  }, [valid]);

  return (
    <div className="login-page">
      <div className="login-container">
        <h2>Admin Login</h2>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            value={user.email}
            name="email"
            placeholder="Email.."
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={user.password}
            placeholder="Password.."
            onChange={handleChange}
          />
        </div>
        <button onClick={logincheck}>Login</button>
      </div>
    </div>
  );
};

export default LoginPage;
