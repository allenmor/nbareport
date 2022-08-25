import React from "react";
import "./Players.css";
import { useState, useEffect } from 'react'

function PlayerCard({ player, teams }) {
  const [curSeason, setCurSeason] =  useState(player.stats[0].season)
  const [curPlayerStat, setCurPlayerStat] = useState(player.stats[0])



let playerArray = Object.keys(player.stats).map((key) => [Number(key), player.stats[key]])

// Get Which season compared to selection



//SEASON DROP DOWN MENU NEXT TO EACH PLAYER
let seasonSelect = playerArray.map((el, i) => {
  return <option key={i} value={el[1].season }>{el[1].season }</option>
})

// GET INPUT FROM SEASON SELECT MENU
function handleChange(e) {
  setCurSeason(e.target.value)
}
let filterSeason = playerArray.filter((el, i) => {
  return el[1].season == curSeason
})

useEffect(() => {


setCurPlayerStat(filterSeason[0][1])
},[curSeason])


//SET ALL STATS
  let [season, name, image, region, teamName] = [
    player.stats[0].season,
    player.name,
    player.imgURL,
    curPlayerStat.teamName[0].region,
    curPlayerStat.teamName[0].name,
  ];
  let [points, gamesPlayed, rebounds,] = [
    (player.stats[0].pts / player.stats[0].gp).toFixed(1),
    curPlayerStat.gp,
    ((curPlayerStat.orb + curPlayerStat.orb) / curPlayerStat.gp).toFixed(
      1
    ),
  ];
  let [assists, fieldGoal] = [
    (curPlayerStat.ast / curPlayerStat.gp).toFixed(1),
    ((curPlayerStat.fg / curPlayerStat.fga) * 100).toFixed(1),
  ];

  return (
    <tr className="playerRow">
      <td data-label="Season">
        <select onChange={handleChange}>
          {seasonSelect}
        </select>
      </td>
      <td data-label="Name">{name}</td>
      <td className="playerImg" data-label="Image">
        <img src={image} />
      </td>
      <td data-label="Pos">
        {player.pos}
      </td>
      <td className="teamName" data-label="Team">
        {region} {teamName}
      </td>
      <td data-label="GP">{gamesPlayed}</td>
      <td data-label="Points">{points}</td>
      <td data-label="Rebounds">{rebounds}</td>
      <td data-label="Assists">{assists}</td>
      <td data-label="FGP">{fieldGoal}%</td>
    </tr>
  );
}

export default PlayerCard;
