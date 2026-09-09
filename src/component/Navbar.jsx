import React from "react";
import { Link } from "react-router-dom";

function Navbar({ setIsAuthenticated }) {
  return (
    <nav className="navbar">
      <div className="logo">Library Management System</div>

      <div className="nav-links">
        <Link to="/" className="nav-link">Home</Link>
<Link to="/registration" className="nav-link">Registration</Link>
<Link to="/dashboard" className="nav-link">Dashboard</Link>
        <button onClick={() => setIsAuthenticated(false)}>
          Logout
        </button>
      </div>
    </nav>
  );
}

export default Navbar;