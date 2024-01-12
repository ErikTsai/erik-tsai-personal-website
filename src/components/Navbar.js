import React from "react";
import { Link } from "react-router-dom";
import TsunamiIcon from "@mui/icons-material/Tsunami";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbarContainer">
        <Link to="/" className="logoLink">
          <div className="mainLogo">
            <TsunamiIcon className="logoIcon" />
            <h1 className="title"> erik tsai </h1>
          </div>
        </Link>
        <div className="menu">
          <Link to="/" className="navbarLinks">
            about me
          </Link>
          <Link to="/projects" className="navbarLinks">
            projects
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
