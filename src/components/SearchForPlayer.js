import React from "react";
import { useState, useEffect } from "react";
import "./Search.css";

function SearchForPlayer({ players, teams }) {
  const [search, setsSearch] = useState("");
  const [filteredPlayer, setFilteredPlayer] = useState({});

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
    setFilteredPlayer(player[0]);
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
            src={
              filteredPlayer.imgURL
                ? filteredPlayer.imgURL
                : "https://andscape.com/wp-content/uploads/2017/06/nbalogo.jpg?w=1400"
            }
            alt={filteredPlayer.name}
          ></img>
          <div className="playerDescription">
            <h3>{filteredPlayer.name ? filteredPlayer.name : "Name:"}</h3>
            <p>{filteredPlayer.pos ? filteredPlayer.pos : "Position:"}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchForPlayer;
