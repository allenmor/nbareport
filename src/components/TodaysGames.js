import React from "react";
import { useEffect, useState } from "react";
import TodaysGameCard from "./TodaysGameCard";
import "./TodaysGame.css";
import axios from "axios";
import TeamPlayerStats from "./TeamPlayerStats";

function TodaysGames({ gamesClickedState }) {
  const [games, setGames] = useState([]);
  const [clicked, setClicked] = useState(false);
  const [teamLastTenName, setTeamLastTenName] = useState("");
  const [teamsGames, setTeamsGames] = useState([]);
  const [yesterdaysGames, setYesterdaysGames] = useState([]);
  const [upcomingGames, setUpcomingGames] = useState([]);
  const [upcomingClicked, setUpcomingClicked] = useState(false);
  const [yesterdaysClicked, setYesterdaysClicked] = useState(false);
  const [ifYesterdayClicked, setIfYesterdayClicked] = useState(true);
  const [teamAbr, setTeamAbr] = useState('')

  const [playerStatsClicked, setPlayerStatsClicked] = useState(false)


  //TODAYS DATE FOR FETCH
  let todays = new Date();
  let month = todays.getMonth() + 1;


  let day = "0" + todays.getDate();
  if(day.length === 3){
    day = day.substring(1);
  }

  let year = todays.getFullYear();
  let fullTodays = `${day}-${month}-${year}`;
  //TODAYS DATE FOR FETCH
  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://nba-schedule.p.rapidapi.com/schedule",
      params: { date: `${fullTodays}` },
      headers: {
        "X-RapidAPI-Key": "8cfd1121c5msh914ca13681907a5p1497f6jsn500f6dda8582",
        "X-RapidAPI-Host": "nba-schedule.p.rapidapi.com",
      },
    };
    axios
      .request(options)
      .then(function (response) {
        setGames(response.data[0].games);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  // TODAYS DATE
  let today = String(new Date());
  let changeUpDate = today.split("");
  let dateArr = [];
  for (let i = 0; i < changeUpDate.length; i++) {
    dateArr.push(changeUpDate[i]);
    if (
      changeUpDate[i] === "2" &&
      changeUpDate[i - 1] === "2" &&
      changeUpDate[i - 2] === "0" &&
      changeUpDate[i - 3] === "2"
    ) {
      break;
    }
  }

  let date = dateArr.join("");
  //TODAYS DATE
  //IF TEAM IS CLICKED
  function teamClicked(clicked, team, name) {
    setTeamAbr(team)
    setClicked(clicked);
    setTeamLastTenName(name);
    const options = {
      method: "GET",
      url: "https://nba-schedule.p.rapidapi.com/schedule",
      params: { team: `${team}` },
      headers: {
        "X-RapidAPI-Key": "8cfd1121c5msh914ca13681907a5p1497f6jsn500f6dda8582",
        "X-RapidAPI-Host": "nba-schedule.p.rapidapi.com",
      },
    };
    axios
      .request(options)
      .then(function (response) {
        setTeamsGames(
          response.data
            .filter((el, i) => {
              return el.games[0].homeTeam.score !== 0;
            })
            .reverse()
        );
        setUpcomingGames(
          response.data.filter((el, i) => {
            return el.games[0].homeTeam.score === 0;
          })
        );
      })
      .catch(function (error) {
        console.error(error);
      });
    setUpcomingClicked(false);
  }

  useEffect(() => {
    setClicked(false);
  }, [gamesClickedState === true]);

  function handleUpcomingGamesClick() {
    setUpcomingClicked((prev) => !prev);
    setPlayerStatsClicked(false)

  }

  // GET YESTERDAYS GAMES AFTER CLICK

  const yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1);
  let changeUpYesterdayDate = yesterday.toString().split("");
  let yesterdayDateArr = [];
  for (let i = 0; i < changeUpYesterdayDate.length; i++) {
    yesterdayDateArr.push(changeUpYesterdayDate[i]);
    if (
      changeUpYesterdayDate[i] === "2" &&
      changeUpYesterdayDate[i - 1] === "2" &&
      changeUpYesterdayDate[i - 2] === "0" &&
      changeUpYesterdayDate[i - 3] === "2"
    ) {
      break;
    }
  }
  let yesterdays = yesterdayDateArr.join("");
  function handleYesterdaysClick() {
    setYesterdaysClicked((prev) => !prev);
    if (ifYesterdayClicked) {
      let yesterdayFetch = [];
      yesterdayFetch.push(yesterdayDateArr[8], yesterdayDateArr[9], "-");
      for (let i = 0; i < yesterdayDateArr.length; i++) {
        switch (
          yesterdayDateArr[i] +
          yesterdayDateArr[i + 1] +
          yesterdayDateArr[i + 2]
        ) {
          case "Jan":
            yesterdayFetch.push("01-");
            break;
          case "Feb":
            yesterdayFetch.push("02-");
            break;
          case "Mar":
            yesterdayFetch.push("03-");
            break;
          case "Apr":
            yesterdayFetch.push("04-");
            break;
          case "May":
            yesterdayFetch.push("05-");
            break;
          case "Jun":
            yesterdayFetch.push("06-");
            break;
          case "Jul":
            yesterdayFetch.push("07-");
            break;
          case "Aug":
            yesterdayFetch.push("08-");
            break;
          case "Sep":
            yesterdayFetch.push("09-");
            break;
          case "Oct":
            yesterdayFetch.push("10-");
            break;
          case "Nov":
            yesterdayFetch.push("11-");
            break;
          case "Dec":
            yesterdayFetch.push("12-");
            break;
          default:
          // code block
        }
      }
      yesterdayFetch.push(
        yesterdayDateArr[11],
        yesterdayDateArr[12],
        yesterdayDateArr[13],
        yesterdayDateArr[14]
      );
      let a = yesterdayFetch.join("");
      const options = {
        method: "GET",
        url: "https://nba-schedule.p.rapidapi.com/schedule",
        params: { date: `${a}` },
        headers: {
          "X-RapidAPI-Key":
            "8cfd1121c5msh914ca13681907a5p1497f6jsn500f6dda8582",
          "X-RapidAPI-Host": "nba-schedule.p.rapidapi.com",
        },
      };

      axios
        .request(options)
        .then(function (response) {
          setYesterdaysGames(response.data[0].games);
        })
        .catch(function (error) {
          console.error(error);
        });
    }
    setIfYesterdayClicked(false);
  }
  // GET YESTERDAYS GAMES AFTER CLICK


  // IF PLAYER STATS CLICKED
  function handlePlayerStatsClicked() {
    setPlayerStatsClicked(true)

  }

  return (
    <>
      {clicked ? (
        <div className="todays-games-div">
          <h1 className="date">{teamLastTenName}</h1>
          {upcomingClicked ? (
            <>
              <button
                className="button-54"
                onClick={handlePlayerStatsClicked}
                role="button"
              >
                Player stats
              </button>
              <button
                className="button-54"
                onClick={handleUpcomingGamesClick}
                role="button"
              >
                Recent games
              </button>
            </>
          ) : (
            <>
              <button
                className="button-54"
                onClick={handlePlayerStatsClicked}
                role="button"
              >
                Player stats
              </button>
              <button
                className="button-54"
                onClick={handleUpcomingGamesClick}
                role="button"
              >
                Upcoming games
              </button>
            </>
          )}
          {playerStatsClicked ? <TeamPlayerStats teamAbr={teamAbr}/> : !upcomingClicked
            ? teamsGames.map((el, i) => {
                return (
                  <TodaysGameCard
                    teamClicked={teamClicked}
                    game={el.games[0]}
                    key={i}
                  />
                );
              })
            : upcomingGames.map((el, i) => {
                return (
                  <TodaysGameCard
                    teamClicked={teamClicked}
                    game={el.games[0]}
                    key={i}

                  />
                );
              })}
        </div>
      ) : (
        <div className="todays-games-div">
          <h1 className="date">Today's Games</h1>
          <h1 className="date">{date}</h1>
          {games.map((el, i) => {
            return (
              <TodaysGameCard 
              teamClicked={teamClicked} 
              game={el} 
              key={i}  

              />
            );
          })}
          <button
            className="button-54"
            onClick={handleYesterdaysClick}
            role="button"
          >
            Yesterdays Games
          </button>
          <h1 className="date">{yesterdays}</h1>
          {yesterdaysClicked
            ? yesterdaysGames.map((el, i) => {
                return (
                  <TodaysGameCard 
                  teamClicked={teamClicked} 
                  game={el} 
                  key={i} 

                  />
                );
              })
            : ""}
        </div>
      )}
    </>
  );
}

export default TodaysGames;
