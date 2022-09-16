import React from "react";
import StatCard from "./StatCard";
import "./Stats.css";
import { useState, useEffect } from "react";

function Stats() {

  const [playerStat, setPlayerStat] = useState([])
  const [clicked, setClicked] = useState(false)
  //WHEN YOU CLICK ON POINTS SORTS ARRAY BY HIGHEST POINTS FIRSTxw
  useEffect(() => {
    fetch('https://raw.githubusercontent.com/allenmor/nbareport/main/currentStats.json')
    .then(res => res.json())
    .then(data => {
      setPlayerStat(data)
    })
  },[])

//TOGGLE STATS HIGHEST AND LOWEST
  function handleClick(category){
    // console.log(standings)
    let newArray = [...playerStat]
    setClicked(prev => !prev)
 
    clicked ? 
    newArray.sort((a,b) => {
      return a[category] - b[category]
    }) :
    newArray.sort((a,b) => {
      return b[category] - a[category]
    })

    setPlayerStat(newArray)
  }
  return (
<>
      <h1 className="teamTitle-stats">Player Per Game Stats</h1>
      <div className="stat_tableDiv">
      <table className="statsTable">
        <caption>
          {/* <button onClick={handleClick}>{clicked ? "Eastern Conference" : "Western Conference"}</button> */}
        </caption>
        <thead className="statThead">
          <tr className="statTr">
            <th className="statTh sticky-col" scope="col">Player</th>
            <th className="statTh" scope="col">Pos</th>
            <th className="statTh" scope="col">Tm</th>
            <th onClick={() => handleClick('Age')} className="statTh" scope="col">Age</th>
            <th onClick={() => handleClick('PTS')} className="statTh" scope="col">PTS</th>
            <th onClick={() => handleClick('G')} className="statTh" scope="col">G</th>
            <th onClick={() => handleClick('GS')} className="statTh" scope="col">GS</th>
            <th onClick={() => handleClick('MP')} className="statTh" scope="col">MP</th>
            <th onClick={() => handleClick('FG')} className="statTh" scope="col">FG</th>
            <th onClick={() => handleClick('FGA')} className="statTh" scope="col">FGA</th>
            <th onClick={() => handleClick('FG%')} className="statTh" scope="col">FG%</th>
            <th onClick={() => handleClick('3P')} className="statTh" scope="col">3P</th>
            <th onClick={() => handleClick('3PA')} className="statTh" scope="col">3PA</th>
            <th onClick={() => handleClick('3P%')} className="statTh" scope="col">3P%</th>
            <th onClick={() => handleClick('2P')} className="statTh" scope="col">2P</th>
            <th onClick={() => handleClick('2PA')} className="statTh" scope="col">2PA</th>
            <th onClick={() => handleClick('2P%')} className="statTh" scope="col">2P%</th>
            <th onClick={() => handleClick('FTA')} className="statTh" scope="col">FTA</th>
            <th onClick={() => handleClick('FT%')} className="statTh" scope="col">FT%</th>
            <th onClick={() => handleClick('ORB')} className="statTh" scope="col">ORB</th>
            <th onClick={() => handleClick('DRB')} className="statTh" scope="col">DRB</th>
            <th onClick={() => handleClick('TRB')} className="statTh" scope="col">TRB</th>
            <th onClick={() => handleClick('AST')} className="statTh" scope="col">AST</th>
            <th onClick={() => handleClick('STL')} className="statTh" scope="col">STL</th>
            <th onClick={() => handleClick('BLK')} className="statTh" scope="col">BLK</th>
            <th onClick={() => handleClick('TOV')} className="statTh" scope="col">TOV</th>
          </tr>
        </thead>
        <tbody className="statTbody">
          {playerStat.map((el, i) => {
            return <StatCard player={el} key={i} />
          })}        
        </tbody>
      </table>
      </div>
    </>
  );
}

export default Stats;
