import React from "react";
import "./ConferenceTableContainer.css";

function ConferenceCard({ team }) {
  return (
    <tr>
      <td className="row" data-label="Logo"><img className="logo" src={team.imgURLSmall}/></td>
      <td className="row" style={{ color: team.colors[0]}} data-label="Team Name">{team.region} {team.name}</td>
      <td className="row" data-label="Contention">{team.strategy.charAt(0).toUpperCase() + team.strategy.slice(1)}</td>
      <td className="row" data-label="Years In The League">{team.seasons.length} Years</td>
    </tr>
  );
}

export default ConferenceCard;