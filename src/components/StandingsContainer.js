import React from "react";
import { useEffect, useState } from "react";
import "./Standing.css";
import Standing from "./Standing";

function StandingsContainer() {
  const [standings, setStandings] = useState([]);

  const [clicked, setClicked] = useState(false)
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

            console.log(arr)
            //Toggle Wins
            let winArr = [...arr]
            setWinSort(winArr.sort(function(a, b) {
            }))

          });
      });
  }, []);

//TOGGLE HGHEST AND LOWEST STAT FOR EACH COLUMN
  function handleClick(category){
    console.log(category)
    let newArray = [...standings]
    setClicked(prev => !prev)
    
    clicked ? 
    newArray.sort((a,b) => {
      return a.stats[category] - b.stats[category]
    }) :
    newArray.sort((a,b) => {
      return b.stats[category] - a.stats[category]
    })

    setStandings(newArray)
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
            <th className="standingTh" scope="col">W</th>
            <th className="standingTh" scope="col">L</th>
            <th className="standingTh" scope="col">Home</th>
            <th className="standingTh" scope="col">Road</th>
            <th onClick={() => handleClick("FG%")}className="standingTh" scope="col">FG%</th>
            <th onClick={() => handleClick("3P")} className="standingTh" scope="col">3P</th>
            <th onClick={() => handleClick("3PA")} className="standingTh" scope="col">3PA</th>
            <th onClick={() => handleClick("3P%")} className="standingTh" scope="col">3P%</th>
            <th onClick={() => handleClick("2P")} className="standingTh" scope="col">2P</th>
            <th onClick={() => handleClick("2PA")} className="standingTh" scope="col">2PA</th>
            <th onClick={() => handleClick("2P%")} className="standingTh" scope="col">2P%</th>
            <th onClick={() => handleClick("FT%")} className="standingTh" scope="col">FT%</th>
            <th onClick={() => handleClick("ORB")} className="standingTh" scope="col">ORB</th>
            <th onClick={() => handleClick("DRB")} className="standingTh" scope="col">DRB</th>
            <th onClick={() => handleClick("TRB")} className="standingTh" scope="col">TRB</th>
            <th onClick={() => handleClick("AST")} className="standingTh" scope="col">AST</th>
            <th onClick={() => handleClick("STL")} className="standingTh" scope="col">STL</th>
            <th onClick={() => handleClick("BLK")} className="standingTh" scope="col">BLK</th>
            <th onClick={() => handleClick("TOV")} className="standingTh" scope="col">TOV</th>
          </tr>
        </thead>
        <tbody className="standingTbody">
      {
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