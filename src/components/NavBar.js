import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="topnav" id="myTopnav">
      <Link className="active" to="/">Home</Link>
      <Link to="/stadiums">Stadiums</Link>
      <Link to="/stats">Stats</Link>
      <Link to="/searchforplayer">Search</Link>
      <p className="allen"><a href="https://www.linkedin.com/in/allenmord/">Allen Mordukhaev</a></p>
    </div>
  );
}

export default NavBar;
