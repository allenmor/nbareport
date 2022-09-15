import React from "react";
import "./Stats.css";
import { useState, useEffect } from "react";

function StatCard({player}) {

  return (
    <tr className="playerRow statsTr">
      <td className="statTd sticky-col" data-label="Team Name">
        {player.Player}
    </td>
      <td className="statTd sticky-col" data-label="Team Name">
        {player.Pos}
    </td>
      <td className="statTd sticky-col" data-label="Team Name">
        {player.Tm}
    </td>
      <td className="statTd sticky-col" data-label="Team Name">
        {player.Age}
    </td>
      <td className="statTd sticky-col" data-label="Team Name">
        {player.PTS}
    </td>
      <td className="statTd sticky-col" data-label="Team Name">
        {player.G}
    </td>
      <td className="statTd sticky-col" data-label="Team Name">
        {player.GS}
    </td>
      <td className="statTd sticky-col" data-label="Team Name">
        {player.MP}
    </td>
      <td className="statTd sticky-col" data-label="Team Name">
        {player.FG}
    </td>
      <td className="statTd sticky-col" data-label="Team Name">
        {player.FGA}
    </td>
      <td className="statTd sticky-col" data-label="Team Name">
        {player['FG%']}
    </td>
      <td className="statTd sticky-col" data-label="Team Name">
        {player['3P']}
    </td>
      <td className="statTd sticky-col" data-label="Team Name">
        {player['3PA']}
    </td>
      <td className="statTd sticky-col" data-label="Team Name">
        {player['3P%']}
    </td>
      <td className="statTd sticky-col" data-label="Team Name">
        {player['2P']}
    </td>
      <td className="statTd sticky-col" data-label="Team Name">
        {player['2PA']}
    </td>
      <td className="statTd sticky-col" data-label="Team Name">
        {player['2P%']}
    </td>
      <td className="statTd sticky-col" data-label="Team Name">
        {player.FTA}
    </td>
      <td className="statTd sticky-col" data-label="Team Name">
        {player['FT%']}
    </td>
      <td className="statTd sticky-col" data-label="Team Name">
        {player.ORB}
    </td>
      <td className="statTd sticky-col" data-label="Team Name">
        {player.DRB}
    </td>
      <td className="statTd sticky-col" data-label="Team Name">
        {player.TRB}
    </td>
      <td className="statTd sticky-col" data-label="Team Name">
        {player.AST}
    </td>
      <td className="statTd sticky-col" data-label="Team Name">
        {player.STL}
    </td>
      <td className="statTd sticky-col" data-label="Team Name">
        {player.BLK}
    </td>
      <td className="statTd sticky-col" data-label="Team Name">
        {player.TOV}
    </td>
    </tr>
  );
}

export default StatCard;
