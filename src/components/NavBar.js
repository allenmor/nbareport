import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="topnav" id="myTopnav">
      <Link className="active" to="/">Home</Link>
      <Link to="/stadiums">Stadiums</Link>
      <Link to="/players">Players</Link>
      <p className="allen">Allen Mordukhaev</p>
    </div>
  );
}

export default NavBar;
