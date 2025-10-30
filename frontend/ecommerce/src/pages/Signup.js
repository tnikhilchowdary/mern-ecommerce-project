import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log({ name, email, password });

    try {
      const res = await axios.post("http://localhost:5001/api/users/signup", {
        name,
        email,
        password,
      });
      console.log("Signup Successful:", res.data);
    } catch (error) {
      console.log("Signup Error:", error.response?.data || error.message);
    }
  };

  return (
    <div>
      <h1>Welcome to the Signup page</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
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
        <button type="submit">Signup</button>
      </form>
      <p>
        Already Have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
};

export default Signup;
