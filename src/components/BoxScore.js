import React from "react";
import axios from "axios";
import BoxScoreCard from "./BoxScoreCard";
import "./BoxScore.css";
import { useState, useEffect } from "react";

function BoxScore({ away, home, boxScore, homeName, awayName }) {

const [homeClicked, setHomeClicked] = useState(false)
const [awayClicked, setAwayClicked] = useState(false)
const [statsClicked, setStatsClicked] = useState(false)
const [homeTeamStats, setHomeTeamStats] = useState([])
const [awayTeamStats, setAwayTeamStats] = useState([])


useEffect(()=>{
    let homeTeamArr = []
    let awayTeamArr = []

    if(boxScore.playerStats) {
        
      let arrOfObj = Object.values(boxScore.playerStats);
      arrOfObj.map((el, i) => {
              return el.teamAbv === away && awayTeamArr.push(el)
          })
  
      arrOfObj.map((el, i) => {
          return el.teamAbv === home && homeTeamArr.push(el)
      })
      setHomeTeamStats(homeTeamArr)
      setAwayTeamStats(awayTeamArr)
      setAwayClicked(true)


       setAwayTeamStats(prev => prev.sort(function(a, b) {
        return a.mins - b.mins;
      }).reverse())
       setHomeTeamStats(prev => prev.sort(function(a, b) {
        return a.mins - b.mins;
      }).reverse())
      

  }
},[boxScore.playerStats])

console.log(awayTeamStats);
console.log(homeTeamStats);
  function handleAwayClick(){
      setAwayClicked(true)
      setHomeClicked(false)
      setStatsClicked(false)
  }
  function handleHomeClick(){
      setHomeClicked(true)
      setAwayClicked(false)
      setStatsClicked(false)
  }
  function handleStatsClick(){
      setStatsClicked(true)
      setHomeClicked(false)
      setAwayClicked(false)
  }

  return (
    <div className="boxscore-div">
        {boxScore.lineScore && 
        <div>
        <table className="total-points-table-div">
            <thead>
                <tr>
                    <th>Team</th>
                    <th>1</th>
                    <th>2</th>
                    <th>3</th>
                    <th>4</th>
                    <th>T</th>
                </tr>
            </thead>
            <tbody className="total-points-tbody">
                <tr className="total-points-tr">
                    <td>{awayName}</td>
                    <td>{boxScore.lineScore[away]['1Q']}</td>
                    <td>{boxScore.lineScore[away]['2Q']}</td>
                    <td>{boxScore.lineScore[away]['3Q']}</td>
                    <td>{boxScore.lineScore[away]['4Q']}</td>
                    <td>{boxScore.lineScore[away].totalPts}</td>
                </tr>
                <tr className="total-points-tr">
                    <td>{homeName}</td>
                    <td>{boxScore.lineScore[home]['1Q']}</td>
                    <td>{boxScore.lineScore[home]['2Q']}</td>
                    <td>{boxScore.lineScore[home]['3Q']}</td>
                    <td>{boxScore.lineScore[home]['4Q']}</td>
                    <td>{boxScore.lineScore[home].totalPts}</td>
                </tr>
            </tbody>
        </table>
        <div className="team-away-stats-btn-div">
                <button onClick={handleAwayClick}>{awayName}</button>
                <button onClick={handleHomeClick}>{homeName}</button>
                {/* <button onClick={handleStatsClick}>Stats</button> */}
            </div>
        <div className="player-boxscore-div">
            <table className="team-boxscore-table">
                <thead>
                    <tr>
                        <th>Player</th>
                        <th>MIN</th>
                        <th>PTS</th>
                        <th>REB</th>
                        <th>AST</th>
                        <th>STL</th>
                        <th>BLK</th>
                        <th>FGM</th>
                        <th>FGA</th>
                        <th>FG%</th>
                        <th>3PM</th>
                        <th>3PA</th>
                        <th>3P%</th>
                        <th>FTM</th>
                        <th>FTA</th>
                        <th>FT%</th>
                        <th>TOV</th>
                    </tr>
                </thead>
                <tbody>
                    {awayClicked && awayTeamStats.map((el, i) => {
                       return(<tr className="each-player-in-table" key={i}>
                           <td className="player-name">{el.longName}</td>
                           <td>{el.mins}</td>
                           <td>{el.pts}</td>
                           <td>{el.reb}</td>
                           <td>{el.ast}</td>
                           <td>{el.stl}</td>
                           <td>{el.blk}</td>
                           <td>{el.fgm}</td>
                           <td>{el.fga}</td>
                           <td>{el.fgp}</td>
                           <td>{el.tptfgm}</td>
                           <td>{el.tptfga}</td>
                           <td>{el.tptfgp}</td>
                           <td>{el.ftm}</td>
                           <td>{el.fta}</td>
                           <td>{el.ftp}</td>
                           <td>{el.TOV}</td>
                       </tr>)
                    })}
                    
                    {homeClicked && homeTeamStats.map((el, i) => {
                       return(<tr className="each-player-in-table" key={i}>
                           <td className="player-name">{el.longName}</td>
                           <td>{el.mins}</td>
                           <td>{el.pts}</td>
                           <td>{el.reb}</td>
                           <td>{el.ast}</td>
                           <td>{el.stl}</td>
                           <td>{el.blk}</td>
                           <td>{el.fgm}</td>
                           <td>{el.fga}</td>
                           <td>{el.fgp}</td>
                           <td>{el.tptfgm}</td>
                           <td>{el.tptfga}</td>
                           <td>{el.tptfgp}</td>
                           <td>{el.ftm}</td>
                           <td>{el.fta}</td>
                           <td>{el.ftp}</td>
                           <td>{el.TOV}</td>
                       </tr>)
                    })}
                    
                </tbody>
            </table>
        </div>
        </div>
        }
   
    </div>
  );
}

export default BoxScore;
