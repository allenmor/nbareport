import React from "react";
import "./Stats.css";
import { useState, useEffect } from "react";

function StatCard({player}) {

  const [clicked, setClicked] = useState(false)


  function handleClick() {
    setClicked(prev => !prev)
  }

  return (
    <tr className="playerRow statsTr">
      <td style={clicked ? { backgroundColor: 'rgb(56,171,214)', color : 'black'} : {color: 'rgb(189,193,197)'}} onClick={() => handleClick()} className="statTd sticky-col" data-label="Team Name">
        {player.Player}
    </td>
      <td style={clicked ? { backgroundColor: 'rgb(56,171,214)', color : 'black'} : {color: 'rgb(189,193,197)'}} onClick={() => handleClick()} className="statTd sticky-col" data-label="Team Name">
        {player.Pos}
    </td>
      <td style={clicked ? { backgroundColor: 'rgb(56,171,214)', color : 'black'} : {color: 'rgb(189,193,197)'}} onClick={() => handleClick()} className="statTd sticky-col" data-label="Team Name">
        {player.Tm}
    </td>
      <td style={clicked ? { backgroundColor: 'rgb(56,171,214)', color : 'black'} : {color: 'rgb(189,193,197)'}} onClick={() => handleClick()} className="statTd sticky-col" data-label="Team Name">
        {player.Age}
    </td>
      <td style={clicked ? { backgroundColor: 'rgb(56,171,214)', color : 'black'} : {color: 'rgb(189,193,197)'}} onClick={() => handleClick()} className="statTd sticky-col" data-label="Team Name">
        {player.PTS}
    </td>
      <td style={clicked ? { backgroundColor: 'rgb(56,171,214)', color : 'black'} : {color: 'rgb(189,193,197)'}} onClick={() => handleClick()} className="statTd sticky-col" data-label="Team Name">
        {player.G}
    </td>
      <td style={clicked ? { backgroundColor: 'rgb(56,171,214)', color : 'black'} : {color: 'rgb(189,193,197)'}} onClick={() => handleClick()} className="statTd sticky-col" data-label="Team Name">
        {player.GS}
    </td>
      <td style={clicked ? { backgroundColor: 'rgb(56,171,214)', color : 'black'} : {color: 'rgb(189,193,197)'}} onClick={() => handleClick()} className="statTd sticky-col" data-label="Team Name">
        {player.MP}
    </td>
      <td style={clicked ? { backgroundColor: 'rgb(56,171,214)', color : 'black'} : {color: 'rgb(189,193,197)'}} onClick={() => handleClick()} className="statTd sticky-col" data-label="Team Name">
        {player.FG}
    </td>
      <td style={clicked ? { backgroundColor: 'rgb(56,171,214)', color : 'black'} : {color: 'rgb(189,193,197)'}} onClick={() => handleClick()} className="statTd sticky-col" data-label="Team Name">
        {player.FGA}
    </td>
      <td style={clicked ? { backgroundColor: 'rgb(56,171,214)', color : 'black'} : {color: 'rgb(189,193,197)'}} onClick={() => handleClick()} className="statTd sticky-col" data-label="Team Name">
        {player['FG%']}
    </td>
      <td style={clicked ? { backgroundColor: 'rgb(56,171,214)', color : 'black'} : {color: 'rgb(189,193,197)'}} onClick={() => handleClick()} className="statTd sticky-col" data-label="Team Name">
        {player['3P']}
    </td>
      <td style={clicked ? { backgroundColor: 'rgb(56,171,214)', color : 'black'} : {color: 'rgb(189,193,197)'}} onClick={() => handleClick()} className="statTd sticky-col" data-label="Team Name">
        {player['3PA']}
    </td>
      <td style={clicked ? { backgroundColor: 'rgb(56,171,214)', color : 'black'} : {color: 'rgb(189,193,197)'}} onClick={() => handleClick()} className="statTd sticky-col" data-label="Team Name">
        {player['3P%']}
    </td>
      <td style={clicked ? { backgroundColor: 'rgb(56,171,214)', color : 'black'} : {color: 'rgb(189,193,197)'}} onClick={() => handleClick()} className="statTd sticky-col" data-label="Team Name">
        {player['2P']}
    </td>
      <td style={clicked ? { backgroundColor: 'rgb(56,171,214)', color : 'black'} : {color: 'rgb(189,193,197)'}} onClick={() => handleClick()} className="statTd sticky-col" data-label="Team Name">
        {player['2PA']}
    </td>
      <td style={clicked ? { backgroundColor: 'rgb(56,171,214)', color : 'black'} : {color: 'rgb(189,193,197)'}} onClick={() => handleClick()} className="statTd sticky-col" data-label="Team Name">
        {player['2P%']}
    </td>
      <td style={clicked ? { backgroundColor: 'rgb(56,171,214)', color : 'black'} : {color: 'rgb(189,193,197)'}} onClick={() => handleClick()} className="statTd sticky-col" data-label="Team Name">
        {player.FTA}
    </td>
      <td style={clicked ? { backgroundColor: 'rgb(56,171,214)', color : 'black'} : {color: 'rgb(189,193,197)'}} onClick={() => handleClick()} className="statTd sticky-col" data-label="Team Name">
        {player['FT%']}
    </td>
      <td style={clicked ? { backgroundColor: 'rgb(56,171,214)', color : 'black'} : {color: 'rgb(189,193,197)'}} onClick={() => handleClick()} className="statTd sticky-col" data-label="Team Name">
        {player.ORB}
    </td>
      <td style={clicked ? { backgroundColor: 'rgb(56,171,214)', color : 'black'} : {color: 'rgb(189,193,197)'}} onClick={() => handleClick()} className="statTd sticky-col" data-label="Team Name">
        {player.DRB}
    </td>
      <td style={clicked ? { backgroundColor: 'rgb(56,171,214)', color : 'black'} : {color: 'rgb(189,193,197)'}} onClick={() => handleClick()} className="statTd sticky-col" data-label="Team Name">
        {player.TRB}
    </td>
      <td style={clicked ? { backgroundColor: 'rgb(56,171,214)', color : 'black'} : {color: 'rgb(189,193,197)'}} onClick={() => handleClick()} className="statTd sticky-col" data-label="Team Name">
        {player.AST}
    </td>
      <td style={clicked ? { backgroundColor: 'rgb(56,171,214)', color : 'black'} : {color: 'rgb(189,193,197)'}} onClick={() => handleClick()} className="statTd sticky-col" data-label="Team Name">
        {player.STL}
    </td>
      <td style={clicked ? { backgroundColor: 'rgb(56,171,214)', color : 'black'} : {color: 'rgb(189,193,197)'}} onClick={() => handleClick()} className="statTd sticky-col" data-label="Team Name">
        {player.BLK}
    </td>
      <td style={clicked ? { backgroundColor: 'rgb(56,171,214)', color : 'black'} : {color: 'rgb(189,193,197)'}} onClick={() => handleClick()} className="statTd sticky-col" data-label="Team Name">
        {player.TOV}
    </td>
    </tr>
  );
}

export default StatCard;
