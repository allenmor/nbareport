import React from "react";
import { useEffect, useState } from "react";
import "./Standing.css";
import Standing from "./Standing";

function StandingsContainer() {
  const [standings, setStandings] = useState([]);
  const [clickedW, setClickedW] = useState(false)
  const [winSort, setWinSort] = useState([])

  //FETCH GET INFO
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/allenmor/nbareport/main/currentStandings.json"
    )
      .then((res) => res.json())
      .then((standings) => {
        fetch(
          "https://raw.githubusercontent.com/allenmor/nbareport/main/teamStats.json"
        )
          .then((res) => res.json())
          .then((teamStats) => {
            const arr = [];
            for (let i = 0; i < standings.length; i++) {
              for (let j = 0; j < teamStats.length; j++) {
                let teamName = teamStats[i].Team;
                if (teamName.charAt(teamName.length) === "*") {
                  teamName = teamName.slice(0, teamName.length - 1);
                }
                if (teamName === teamStats[j].Team) {
                  standings[i].stats = teamStats[j];
                  arr.push(standings[i]);
                }
              }
            }
            setStandings(arr);
          });
      });
  }, []);


  console.log('standings', standings)
  function handleClick() {

    // let sorted = standings
    let newArr = standings.sort(function(a, b) {
      return +a.Overall.substring(0, 2) - +b.Overall.substring(0, 2)
    })
    // setWinSort(newArr)
    setClickedW(prev => !prev)
    console.log(clickedW)
    console.log('winsort', winSort)
  }
  

  return (
    <>
      <h1 className="teamTitle">Team Standings/Stats</h1>
      <div className="standing_tableDiv">
      <table className="standingsTable">
        <caption>
          {/* <button onClick={handleClick}>{clicked ? "Eastern Conference" : "Western Conference"}</button> */}
        </caption>
        <thead className="standingThead">
          <tr className="standingTr">
            <th className="standingTh sticky-col" scope="col">Team</th>
            <th onClick={handleClick} className="standingTh" scope="col">W</th>
            <th className="standingTh" scope="col">L</th>
            <th className="standingTh" scope="col">Home</th>
            <th className="standingTh" scope="col">Road</th>
            <th className="standingTh" scope="col">FG%</th>
            <th className="standingTh" scope="col">3P</th>
            <th className="standingTh" scope="col">3PA</th>
            <th className="standingTh" scope="col">3P%</th>
            <th className="standingTh" scope="col">2P</th>
            <th className="standingTh" scope="col">2PA</th>
            <th className="standingTh" scope="col">2P%</th>
            <th className="standingTh" scope="col">FT%</th>
            <th className="standingTh" scope="col">ORB</th>
            <th className="standingTh" scope="col">DRB</th>
            <th className="standingTh" scope="col">TRB</th>
            <th className="standingTh" scope="col">AST</th>
            <th className="standingTh" scope="col">STL</th>
            <th className="standingTh" scope="col">BLK</th>
            <th className="standingTh" scope="col">TOV</th>
          </tr>
        </thead>
        <tbody className="standingTbody">
      {clickedW ?
      winSort.map((el, i) => {
        return <Standing key={i} team={el} />
      }) :
       standings.map((el, i) => {
        return <Standing key={i} team={el} />
      })}
         
        </tbody>
      </table>
      </div>
    </>
  );
}

export default StandingsContainer;