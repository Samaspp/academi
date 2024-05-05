import React from "react";
import "./Navbar.css";
import Image from "next/image";
import AccountCircleSharpIcon from "@mui/icons-material/AccountCircleSharp";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-img--container">
        <Image
          className="navbar-img"
          src="/logo-no-background.svg"
          alt="Logo"
          width={200}
          height={40}
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
