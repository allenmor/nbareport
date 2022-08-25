import React from "react";
import "./ConferenceTableContainer.css";

function PlayerCard({ player, teams }) {

  let [season, name, image, region, teamName] = [player.stats[0].season, player.name, player.imgURL, player.stats[0].teamName[0].region, player.stats[0].teamName[0].name]
  let [points, gamesPlayed, rebounds] = [(player.stats[0].pts / player.stats[0].gp).toFixed(1),  player.stats[0].gp]


  return (
        <tr>
          <td data-label="Account">{season}</td>
          <td data-label="Due Date">{name}</td>
          <td data-label="Amount"><img src={image}/></td>
          <td data-label="Period">{region} {teamName}</td>
          <td data-label="Period">{gamesPlayed}</td>
          <td data-label="Period">{points}</td>
          <td data-label="Period">{rebounds}</td>
        </tr>
  );
}

export default PlayerCard;
