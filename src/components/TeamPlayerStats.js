import React from "react";
import TeamPlayerStatsCard from "./TeamPlayerStatsCard";
import "./TeamPlayer.css";
import { useState, useEffect } from "react";

function TeamPlayerStats({teamAbr}) {



  const [playerStat, setPlayerStat] = useState([])
  const [clicked, setClicked] = useState(false)
  const [playerStatClicked, setPlayerStatClicked] = useState(false)
  //WHEN YOU CLICK ON POINTS SORTS ARRAY BY HIGHEST POINTS FIRSTxw
  useEffect(() => {

      if(!playerStatClicked) {

          if(teamAbr === 'BKN') {
              teamAbr = 'BRK'
          } else if(teamAbr === 'CHA') {
              teamAbr = 'CHO'
          }
        fetch(`https://raw.githubusercontent.com/allenmor/nbareport/main/currentStats.json`)
        .then(res => res.json())
        .then(data => {

          let teamPlayerStats = data.filter((el, i) => {
            return el.Tm === teamAbr
          })
          setPlayerStat(teamPlayerStats)
        })
      }
      setPlayerStatClicked(true)
  },[])

//TOGGLE STATS HIGHEST AND LOWEST
  function handleClick(category){
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
      <h1 className="teamTitle-stats">Player Per Game Stats 2022 - 2023</h1>
      <div className="stat_tableDiv playerStatDiv">
      <table className="statsTable">
        <caption>
        </caption>
        <thead className="statThead playerStatTh">
          <tr className="statTr">
            <th className="statTh playerStatTh sticky-col" scope="col">Player</th>
            <th className="statTh playerStatTh" scope="col">Pos</th>
            <th className="statTh playerStatTh" scope="col">Tm</th>
            <th onClick={() => handleClick('Age')} className="statTh playerStatTh" scope="col">Age</th>
            <th onClick={() => handleClick('PTS')} className="statTh playerStatTh" scope="col">PTS</th>
            <th onClick={() => handleClick('G')} className="statTh playerStatTh" scope="col">G</th>
            <th onClick={() => handleClick('GS')} className="statTh playerStatTh" scope="col">GS</th>
            <th onClick={() => handleClick('MP')} className="statTh playerStatTh" scope="col">MP</th>
            <th onClick={() => handleClick('FG')} className="statTh playerStatTh" scope="col">FG</th>
            <th onClick={() => handleClick('FGA')} className="statTh playerStatTh" scope="col">FGA</th>
            <th onClick={() => handleClick('FG%')} className="statTh playerStatTh" scope="col">FG%</th>
            <th onClick={() => handleClick('3P')} className="statTh playerStatTh" scope="col">3P</th>
            <th onClick={() => handleClick('3PA')} className="statTh playerStatTh" scope="col">3PA</th>
            <th onClick={() => handleClick('3P%')} className="statTh playerStatTh" scope="col">3P%</th>
            <th onClick={() => handleClick('2P')} className="statTh playerStatTh" scope="col">2P</th>
            <th onClick={() => handleClick('2PA')} className="statTh playerStatTh" scope="col">2PA</th>
            <th onClick={() => handleClick('2P%')} className="statTh playerStatTh" scope="col">2P%</th>
            <th onClick={() => handleClick('FTA')} className="statTh playerStatTh" scope="col">FTA</th>
            <th onClick={() => handleClick('FT%')} className="statTh playerStatTh" scope="col">FT%</th>
            <th onClick={() => handleClick('ORB')} className="statTh playerStatTh" scope="col">ORB</th>
            <th onClick={() => handleClick('DRB')} className="statTh playerStatTh" scope="col">DRB</th>
            <th onClick={() => handleClick('TRB')} className="statTh playerStatTh" scope="col">TRB</th>
            <th onClick={() => handleClick('AST')} className="statTh playerStatTh" scope="col">AST</th>
            <th onClick={() => handleClick('STL')} className="statTh playerStatTh" scope="col">STL</th>
            <th onClick={() => handleClick('BLK')} className="statTh playerStatTh" scope="col">BLK</th>
            <th onClick={() => handleClick('TOV')} className="statTh playerStatTh" scope="col">TOV</th>
          </tr>
        </thead>
        <tbody className="statTbody">
          {playerStat.map((el, i) => {
            return <TeamPlayerStatsCard player={el} key={i} />
          })}        
        </tbody>
      </table>
      </div>
    </>
  );
}

export default TeamPlayerStats;
