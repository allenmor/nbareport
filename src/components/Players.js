import React from "react";
import PlayerCard from "./PlayerCard";
import "./ConferenceTableContainer.css";

function Players({ players, teams }) {

  // filter players that return a name

  let newArray = players.filter((el, i) => {
    return el.name;
  });
  let onlyNbaPlayers = newArray.filter((player, i) => {
    return player.stats;
  });

  let updatedStats = onlyNbaPlayers.map((player, i) => {
    return player.stats.map((stat, i) => {
      return (
        stat.tid ===
        teams.map((el, i) => {
          return el.tid;
        })
      );
    })
      ? {
          ...player,
          stats: {
            ...player.stats.map((object) => {
              return {
                ...object,
                teamName: teams.filter((el, i) => {
                  return el.tid === object.tid;
                }),
              };
            }),
          },
        }
      : "no";
  });

  return (
    <div className="players">
      <table>
        <caption>All Player Stats</caption>
        <thead>
          <tr>
            <th scope="col">Season</th>
            <th scope="col">Name</th>
            <th scope="col">Image</th>
            <th scope="col">Team</th>
            <th scope="col">Games Played</th>
            <th scope="col">Points</th>
            <th scope="col">Rebounds</th>
            <th scope="col">Assists</th>
            <th scope="col">FGP</th>
          </tr>
        </thead>
        <tbody>{updatedStats.map((player, i) => {
          return <PlayerCard key={i} teams={teams} player={player}/>
        })}</tbody>
      </table>
    </div>
  );
}

export default Players;
