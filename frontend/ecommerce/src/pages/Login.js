import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log({ email, password }); 

    try {
      const response = await axios.post("http://localhost:5001/api/users/login", {
        email,
        password,
      });
      console.log("Login Successful:", response.data);
    } catch (error) {
      console.log("Login Error:", error.response?.data || error.message);
    }
  };

  return (
    <div>
      <h1>Welcome to the Login page</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
      <p>
        Don’t have an account? <Link to="/sign">Signup</Link>
      </p>
    </div>
  );
};

export default Login;
