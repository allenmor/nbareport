import "./App.css";
import React from "react";
import FrontPage from "./components/FrontPage";
import { Route, Routes } from "react-router-dom";
import StandingsContainer from "./components/StandingsContainer";
import Stats from "./components/Stats";
import NavBar from "./components/NavBar";
import SearchForPlayer from "./components/SearchForPlayer";
import NewsContainer from "./components/NewsContainer";
import { useState, useEffect } from 'react'

function App() {
  const [teams, setTeams] = useState([])
  const [players, setPlayers] = useState([])

  //FETCH GET INFO
  useEffect(() => {
    fetch('https://raw.githubusercontent.com/allenmor/nbareport/main/db.json')
    .then(res => res.json())
    .then(data => {

      setTeams(data.data[0].teams)
      setPlayers(data.data[0].players)
    })
  },[])
  return (
    <>
    <NavBar></NavBar>
    <Routes>
      <Route path="/" element={<FrontPage teams={teams}/>} />
      <Route path="/standings" element={<StandingsContainer />} />
      <Route path="/stats" element={<Stats/>} />
      <Route path="/searchforplayer" element={<SearchForPlayer teams={teams} players={players}/>} />
      <Route path="/news" element={<NewsContainer players={players}/>} />
    </Routes>
    </>
  );
}

export default App;
