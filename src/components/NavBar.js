import React from "react";
import "./NavBar.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function NavBar({gamesClicked}) {

  const navigate = useNavigate()
  function handleLogoClick(){
    navigate('/')
  }

  function handleGamesClicked() {
    gamesClicked(prev => !prev)
  }
  return (
    <>
    <div className="topNav" id="myTopnav">
      <div className="justLinks">
      <img alt="logo" onClick={handleLogoClick} className="nav-links nbaReport" src="https://cdn.nba.com/manage/2020/10/NBA20Secondary20Logo-784x462.jpg"/>
      <Link className="nav-links" to="/standings">Standings</Link>
      <Link className="nav-links" to="/stats">Stats</Link>
      <Link className="nav-links"to="/searchforplayer">Search</Link>
      <Link onClick={handleGamesClicked} className="nav-links"to="/todaysgames">Games</Link>
      {/* <Link className="nav-links" to="/news">Leaders</Link> */}
      </div>
    </div>
    </>
  );
}

export default NavBar;
