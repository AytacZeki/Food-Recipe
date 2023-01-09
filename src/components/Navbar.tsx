import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar-body">
      <div>
        <h1>SunQueen</h1>
        <Link className="link" to="/login">Log in</Link>
      </div>
    </div>
  );
};

export default Navbar;
