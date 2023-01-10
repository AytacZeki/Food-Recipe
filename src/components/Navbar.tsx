import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../img/pngwing.com.png";

const Navbar = () => {
  return (
    <div className="navbar-body">
      <div className="with-login">
        <div className="with-logo">
          <h1>SunQueen</h1>
          <img src={logo} alt="logo" className="logo" />
        </div>
        <Link className="link" to="/login">
          Log in
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
