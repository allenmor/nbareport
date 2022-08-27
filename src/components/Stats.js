import React from "react";
import StatCard from "./StatCard";
import "./Stats.css";
import { useState } from "react";

function Stats({ players, teams }) {
  const [arrayNum, setArrayNum] = useState(0);
  const [search, setSearch] = useState('')
  // filter players that return a name


  let newArray = players.filter((el, i) => {
    return el.name;
  });
  let onlyNbaPlayers = newArray.filter((player, i) => {
    return player.stats;
  });

  //ADD TEAM NAMES TO EACH PLAYER STAT
  let updatedStats = onlyNbaPlayers.map((player, i) => {
    return player.stats.reverse().map((stat, i) => {
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
  updatedStats.length = 640;

  //Filter table will show last 20 players
  function handleBackClick() {
    arrayNum - 20 < 0
      ? console.log("cant go negative")
      : setArrayNum((prev) => prev - 20);
  }
  function handleFrontClick() {
    arrayNum + 20 >= updatedStats.length
      ? setArrayNum(0)
      : setArrayNum((prev) => prev + 20);
  }

  //WHEN YOU CLICK ON POINTS SORTS ARRAY BY HIGHEST POINTS FIRSTxw
  

  return (
    <div className="players">
      <div className="buttons">
        <button
          style={{ display: arrayNum <= 0 ? "none" : "block" }}
          onClick={handleBackClick}
          className="backBtn"
        >
          back
        </button>
        <button onClick={handleFrontClick} className="nextBtn">
          next
        </button>
      </div>
      <table>
        <caption>All Player Stats</caption>
        <thead>
          <tr>
            <th scope="col">Season</th>
            <th scope="col">Name</th>
            <th scope="col">Image</th>
            <th scope="col">Pos</th>
            <th scope="col">Team</th>
            <th scope="col">GP</th>
            <th scope="col">Points</th>
            <th scope="col">Rebounds</th>
            <th scope="col">Assists</th>
            <th scope="col">FGP</th>
          </tr>
        </thead>
        <tbody>
          {updatedStats.slice(arrayNum, arrayNum + 20).map((el, i) => {
            return <StatCard key={i} player={el} />;
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Stats;