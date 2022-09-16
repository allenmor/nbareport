import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
    <div className="topNav sticky" id="myTopnav">
      <div className="justLinks">
      <Link className="nav-links nbaReport" to="/">NBA Report</Link>
      <Link className="nav-links" to="/standings">Standings</Link>
      <Link className="nav-links" to="/stats">Stats</Link>
      <Link className="nav-links"to="/searchforplayer">Search</Link>
      {/* <Link className="nav-links" to="/news">News</Link> */}
      </div>
    </div>
    </>
  );
}

export default NavBar;
