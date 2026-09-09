import React, { useState } from "react";
import "../App.css";

function Login({ setIsAuthenticated, setUserRole }) {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (!username || !password) {
      setError("All fields are required!");
      return;
    }

    if (username === "admin" && password === "admin123") {
      setUserRole("admin");
      setIsAuthenticated(true);
    } else if (username === "user" && password === "user123") {
      setUserRole("user");
      setIsAuthenticated(true);
    } else {
      setError("Invalid credentials!");
    }
  };

  return (
    <div className="login-page">
      <h2>Login</h2>

      <div className="login-box">
        <form onSubmit={handleLogin}>

          <input
            type="text"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="primary-btn">Login</button>

          {error && <p className="error">{error}</p>}

        </form>
      </div>
    </div>
  );
}

export default Login;