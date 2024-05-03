import React from "react";
import "./Navbar.css";
import AccountCircleSharpIcon from "@mui/icons-material/AccountCircleSharp";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-img--container">
        <img
          className="navbar-img"
          src="https://edu.google.com/assets/icons/pages/main/workspace-for-education/classroom/classroom-banner-2.svg"
        />
      </div>
      <div className="navbar-searchbar"></div>
      <div className="navbar-options--container">
        <span>Welcome </span>
        <AccountCircleSharpIcon />
      </div>
    </div>
  );
};

export default Navbar;
