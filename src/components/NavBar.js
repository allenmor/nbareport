import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
    <div className="topNav" id="myTopnav">
      <div className="justLinks">
      <Link className="nav-links nbaReport" to="/"><img src="https://cdn.nba.com/manage/2020/10/NBA20Secondary20Logo-784x462.jpg"/></Link>
      <Link className="nav-links" to="/standings">Standings</Link>
      <Link className="nav-links" to="/stats">Stats</Link>
      <Link className="nav-links"to="/searchforplayer">Search</Link>
      <Link className="nav-links"to="/todaysgames">Games</Link>
      {/* <Link className="nav-links" to="/news">Leaders</Link> */}
      </div>
    </div>
    </>
  );
}

export default NavBar;
