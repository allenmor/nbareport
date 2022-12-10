import React from "react";
import "./Stats.css";
import { useState} from "react";

function StatCard({player}) {
  console.log(player);

  const [clicked, setClicked] = useState(false)


  function handleClick() {
    setClicked(prev => !prev)
  }

  return (
    <tr className="playerRow statsTr">
      <td style={clicked ? { backgroundColor: '#FFFF00', color : '#494F13'} : {color: 'rgb(3,103,214)'}} onClick={() => handleClick()} className="statTd sticky-col" data-label="Team Name">
        {player.Player}
    </td>
      <td style={clicked ? { backgroundColor: '#FFFF00', color : 'black'} : {color: 'black'}} onClick={() => handleClick()} className="statTd sticky-col" data-label="Team Name">
        {player.Pos}
    </td>
      <td style={clicked ? { backgroundColor: '#FFFF00', color : 'black'} : {color: 'rgb(3,103,214)'}} onClick={() => handleClick()} className="statTd sticky-col" data-label="Team Name">
        {player.Tm}
    </td>
      <td style={clicked ? { backgroundColor: '#FFFF00', color : 'black'} : {color: 'black'}} onClick={() => handleClick()} className="statTd sticky-col" data-label="Team Name">
        {player.Age}
    </td>
      <td style={clicked ? { backgroundColor: '#FFFF00', color : 'black'} : {color: 'black'}} onClick={() => handleClick()} className="statTd sticky-col" data-label="Team Name">
        {player.PTS}
    </td>
      <td style={clicked ? { backgroundColor: '#FFFF00', color : 'black'} : {color: 'black'}} onClick={() => handleClick()} className="statTd sticky-col" data-label="Team Name">
        {player.G}
    </td>
      <td style={clicked ? { backgroundColor: '#FFFF00', color : 'black'} : {color: 'black'}} onClick={() => handleClick()} className="statTd sticky-col" data-label="Team Name">
        {player.GS}
    </td>
      <td style={clicked ? { backgroundColor: '#FFFF00', color : 'black'} : {color: 'black'}} onClick={() => handleClick()} className="statTd sticky-col" data-label="Team Name">
        {player.MP}
    </td>
      <td style={clicked ? { backgroundColor: '#FFFF00', color : 'black'} : {color: 'rgb(3,103,214)'}} onClick={() => handleClick()} className="statTd sticky-col" data-label="Team Name">
        {player.FG}
    </td>
      <td style={clicked ? { backgroundColor: '#FFFF00', color : 'black'} : {color: 'rgb(3,103,214)'}} onClick={() => handleClick()} className="statTd sticky-col" data-label="Team Name">
        {player.FGA}
    </td>
      <td style={clicked ? { backgroundColor: '#FFFF00', color : 'black'} : {color: 'black'}} onClick={() => handleClick()} className="statTd sticky-col" data-label="Team Name">
        {player['FG%']}
    </td>
      <td style={clicked ? { backgroundColor: '#FFFF00', color : 'black'} : {color: 'rgb(3,103,214)'}} onClick={() => handleClick()} className="statTd sticky-col" data-label="Team Name">
        {player['3P']}
    </td>
      <td style={clicked ? { backgroundColor: '#FFFF00', color : 'black'} : {color: 'rgb(3,103,214)'}} onClick={() => handleClick()} className="statTd sticky-col" data-label="Team Name">
        {player['3PA']}
    </td>
      <td style={clicked ? { backgroundColor: '#FFFF00', color : 'black'} : {color: 'black'}} onClick={() => handleClick()} className="statTd sticky-col" data-label="Team Name">
        {player['3P%']}
    </td>
      <td style={clicked ? { backgroundColor: '#FFFF00', color : 'black'} : {color: 'black'}} onClick={() => handleClick()} className="statTd sticky-col" data-label="Team Name">
        {player['2P']}
    </td>
      <td style={clicked ? { backgroundColor: '#FFFF00', color : 'black'} : {color: 'black'}} onClick={() => handleClick()} className="statTd sticky-col" data-label="Team Name">
        {player['2PA']}
    </td>
      <td style={clicked ? { backgroundColor: '#FFFF00', color : 'black'} : {color: 'black'}} onClick={() => handleClick()} className="statTd sticky-col" data-label="Team Name">
        {player['2P%']}
    </td>
      <td style={clicked ? { backgroundColor: '#FFFF00', color : 'black'} : {color: 'black'}} onClick={() => handleClick()} className="statTd sticky-col" data-label="Team Name">
        {player.FTA}
    </td>
      <td style={clicked ? { backgroundColor: '#FFFF00', color : 'black'} : {color: 'black'}} onClick={() => handleClick()} className="statTd sticky-col" data-label="Team Name">
        {player['FT%']}
    </td>
      <td style={clicked ? { backgroundColor: '#FFFF00', color : 'black'} : {color: 'rgb(3,103,214)'}} onClick={() => handleClick()} className="statTd sticky-col" data-label="Team Name">
        {player.ORB}
    </td>
      <td style={clicked ? { backgroundColor: '#FFFF00', color : 'black'} : {color: 'rgb(3,103,214)'}} onClick={() => handleClick()} className="statTd sticky-col" data-label="Team Name">
        {player.DRB}
    </td>
      <td style={clicked ? { backgroundColor: '#FFFF00', color : 'black'} : {color: 'rgb(3,103,214)'}} onClick={() => handleClick()} className="statTd sticky-col" data-label="Team Name">
        {player.TRB}
    </td>
      <td style={clicked ? { backgroundColor: '#FFFF00', color : 'black'} : {color: 'black'}} onClick={() => handleClick()} className="statTd sticky-col" data-label="Team Name">
        {player.AST}
    </td>
      <td style={clicked ? { backgroundColor: '#FFFF00', color : 'black'} : {color: 'rgb(3,103,214)'}} onClick={() => handleClick()} className="statTd sticky-col" data-label="Team Name">
        {player.STL}
    </td>
      <td style={clicked ? { backgroundColor: '#FFFF00', color : 'black'} : {color: 'rgb(3,103,214)'}} onClick={() => handleClick()} className="statTd sticky-col" data-label="Team Name">
        {player.BLK}
    </td>
      <td style={clicked ? { backgroundColor: '#FFFF00', color : 'black'} : {color: 'rgb(3,103,214)'}} onClick={() => handleClick()} className="statTd sticky-col" data-label="Team Name">
        {player.TOV}
    </td>
    </tr>
  );
}

export default StatCard;
