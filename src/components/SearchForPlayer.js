import React from "react";
import { useState, useEffect } from "react";
import SearchForPlayerCard from "./SearchForPlayerCard";
import "./Search.css";

function SearchForPlayer({ players, teams }) {
  const [search, setsSearch] = useState("");
  const [playerStats, setPlayerStats] = useState([]);
  const [nameImg, setNameImg] = useState([])

  function handleSubmit(e) {
    e.preventDefault();

    let newArray = players.filter((el, i) => {
      return el.name;
    });
    let onlyNbaPlayers = newArray.filter((player, i) => {
      return player.stats;
    });

    //ADD TEAM NAMES TO EACH PLAYER STAT
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
    //GET PLAYER OBJECT THAT IS TYPED IN THE SEARCH
    let player = updatedStats.filter((el, i) => {
      return el.name.toLowerCase() === search.toLowerCase();
    });
    setPlayerStats(Object.entries(player[0].stats).map((e) => ( { [e[0]]: e[1] } )).reverse());
    setNameImg(player[0]);

    setsSearch("");
    
  }


  //GET SEARCH VALUE
  function handleChange(e) {
    setsSearch(e.target.value);
  }


  return (
    <div className="searchDiv">
      <section className="webdesigntuts-workshop">
        <form onSubmit={handleSubmit} action="" method="">
          <input
            onChange={handleChange}
            value={search}
            type="search"
            placeholder="Who are you looking for?"
          />
          <button>Search</button>
        </form>
      </section>
      <div className="playerImg">
        <div className="card">
          <img
          className="playerPic"
            src={
              nameImg.imgURL
                ? nameImg.imgURL
                : "https://andscape.com/wp-content/uploads/2017/06/nbalogo.jpg?w=1400"
            }
            alt={nameImg.name}
          ></img>
          <div className="playerDescription">
            <h3>{nameImg.name ? nameImg.name : "Name:"}</h3>
            <p>{nameImg.pos ? nameImg.pos : "Position:"}</p>
          </div>
        </div>
      </div>
      <div className="tableDiv">
        <table>
          <caption>Player Stats</caption>
          <thead>
            <tr>
              <th scope="col">Year</th>
              <th scope="col">Team</th>
              <th scope="col">GP</th>
              <th scope="col">PTS</th>
              <th scope="col">REB</th>
              <th scope="col">AST</th>
              <th scope="col">FG%</th>
              <th scope="col">3P%</th>
              <th scope="col">3PM</th>
              <th scope="col">STL</th>
              <th scope="col">BLK</th>
              <th scope="col">TOV</th>
            </tr>
          </thead>
          <tbody>
            {playerStats.map((el, i) => {
              return <SearchForPlayerCard key={i} stats={el}/>
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default SearchForPlayer;
