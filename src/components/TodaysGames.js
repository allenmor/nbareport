import React from "react";
import { useEffect, useState } from "react";
import TodaysGameCard from "./TodaysGameCard";
import "./TodaysGame.css";
import axios from "axios";


function TodaysGames({gamesClickedState}) {
  const [games, setGames] = useState([]);
  const [clicked, setClicked] = useState(false);
  const [teamLastTenName, setTeamLastTenName] = useState('')
  const [teamsGames, setTeamsGames] = useState([])

  //TODAYS DATE FOR FETCH
  let todays = new Date();
  let month = todays.getMonth() + 1;
  let day = "0" + todays.getDate();
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
        // setGames(response.data[0])
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
    setClicked(clicked);
    setTeamLastTenName(name)
    const options = {
      method: 'GET',
      url: 'https://nba-schedule.p.rapidapi.com/schedule',
      params: {team: `${team}`},
      headers: {
        'X-RapidAPI-Key': '8cfd1121c5msh914ca13681907a5p1497f6jsn500f6dda8582',
        'X-RapidAPI-Host': 'nba-schedule.p.rapidapi.com'
      }
    };
    axios.request(options).then(function (response) {
      setTeamsGames(response.data)
    }).catch(function (error) {
      console.error(error);
    });
    console.log(teamsGames);
  }

  useEffect(()=>{
    setClicked(false)
  },[gamesClickedState === true])


  return (
    <>
      {clicked ? (
                <div className="todays-games-div">
                <h1 className="date">{teamLastTenName}</h1>
                <h1 className="date">Recent Games</h1>
                {teamsGames.map((el, i) => {
                  return (
                    <TodaysGameCard teamClicked={teamClicked} game={el.games[0]} key={i} />
                  );
                })}
              </div>
      ) : (
        <div className="todays-games-div">
          <h1 className="date">Today's Games</h1>
          <h1 className="date">{date}</h1>
          {games.map((el, i) => {
            return (
              <TodaysGameCard teamClicked={teamClicked} game={el} key={i} />
            );
          })}
        </div>
      )}
    </>
  );
}

export default TodaysGames;
