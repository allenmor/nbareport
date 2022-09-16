import React from "react";
import { useState, useEffect } from "react";
import SearchForPlayerCard from "./SearchForPlayerCard";
import "./Search.css";

function SearchForPlayer({ players, teams }) {
  const [search, setsSearch] = useState("");
  const [playerStats, setPlayerStats] = useState([]);
  let initialName = {
    name: "Name:",
    pos: "Position",
    imgURL:
      "https://andscape.com/wp-content/uploads/2017/06/nbalogo.jpg?w=1400",
  };
  const [nameImg, setNameImg] = useState(initialName);
  const [filteredPlayers, setFilteredPlayers] = useState([]);
  const [searchingPlayers, setSearchingPlayers] = useState([]);

  //now e represents string that is being searched
  function handleSubmit(term) {
    //e.preventDefault();

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
    console.log(updatedStats);
    //GET PLAYER OBJECT THAT IS TYPED IN THE SEARCH
    let player = updatedStats.filter((el, i) => {
      return el.name.toLowerCase() === term.toLowerCase().trim();
    });
    setNameImg(
      player[0]
        ? player[0]
        : { ...initialName, name: "Player", pos: "Not Available" }
    );
    setPlayerStats(
      player[0]
        ? Object.entries(player[0].stats)
            .map((e) => ({ [e[0]]: e[1] }))
            .reverse()
        : []
    );
    setsSearch("");
  }

  //GET SEARCH VALUE
  function handleChange(e) {
    setsSearch(e.target.value.toLowerCase());

    let newArray = filteredPlayers.filter((el) =>
      el.includes(e.target.value.toLowerCase())
    );
    setSearchingPlayers(newArray);
  }

  useEffect(() => {
    let newArray = players.filter((el, i) => {
      return el.name;
    });
    let onlyNbaPlayers = newArray.filter((player, i) => {
      return player.stats;
    });
    let names = onlyNbaPlayers.map((el, i) => {
      return el.name.toLowerCase();
    });
    setFilteredPlayers(names);
  }, [players]);

  // useEffect(() => )

  //DROP DOWN MENU
  function handleLiClick(e) {
    setsSearch(e.target.textContent);
    setSearchingPlayers([]);
    handleSubmit(e.target.textContent);
  }
  useEffect(() => {}, []);

  return (
    <div className="searchDiv">
      <section className="webdesigntuts-workshop">
        <form
          className="searchForm"
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit(e.target[0].value);
            setSearchingPlayers([]);
            // console.log(e.target[0].value)
          }}
        >
          <input
            id="input-box"
            onChange={handleChange}
            value={search}
            type="search"
            placeholder="Who are you looking for?"
          />
          <button>Search</button>
        </form>
        <ul
          style={
            searchingPlayers.length > 620 || searchingPlayers.length === 0
              ? { display: "none" }
              : { display: "block" }
          }
          className="dropDownUl"
        >
          {searchingPlayers.map((el, i) => {
            return (
              <li className="playerList" key={i} onClick={handleLiClick}>
                {el}
              </li>
            );
          })}
        </ul>
      </section>
      <div className="playerImg">
        <div className="card">
          <img
            className="playerPic"
            src={nameImg.imgURL}
            alt={nameImg.name}
          ></img>
          <div className="playerDescription">
            <h3>{nameImg.name}</h3>
            <p>{nameImg.pos}</p>
          </div>
        </div>
      </div>
      <div className="tableDiv">
        <table className="searchTable">
          <caption>Player Stats</caption>
          <thead className="searchThead">
            <tr className="searchTr">
              <th className="searchTh" scope="col">Year</th>
              <th className="searchTh" scope="col">Team</th>
              <th className="searchTh" scope="col">GP</th>
              <th className="searchTh" scope="col">PTS</th>
              <th className="searchTh" scope="col">REB</th>
              <th className="searchTh" scope="col">AST</th>
              <th className="searchTh" scope="col">FG%</th>
              <th className="searchTh" scope="col">3P%</th>
              <th className="searchTh" scope="col">3PM</th>
              <th className="searchTh" scope="col">STL</th>
              <th className="searchTh" scope="col">BLK</th>
              <th className="searchTh" scope="col">TOV</th>
            </tr>
          </thead>
          <tbody>
            {playerStats.map((el, i) => {
              return <SearchForPlayerCard key={i} stats={el} />;
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default SearchForPlayer;
