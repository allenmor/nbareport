import "./App.css";
import FrontPage from "./components/FrontPage";
import { Route, Routes } from "react-router-dom";
import StadiumsContainer from "./components/StadiumsContainer";
import Players from "./components/Players";
import NavBar from "./components/NavBar";
import { useState, useEffect } from 'react'

function App() {
  const [teams, setTeams] = useState([])
  const [players, setPlayers] = useState([])

  //FETCH GET INFO
  useEffect(() => {
    fetch('http://localhost:3000/data')
    .then(res => res.json())
    .then(data => {
      setTeams(data[0].teams)
      setPlayers(data[0].players)
    })
  },[])




  return (
    <>
    <NavBar></NavBar>
    <Routes>
      <Route path="/" element={<FrontPage teams={teams}/>} />
      <Route path="/stadiums" element={<StadiumsContainer />} />
      <Route path="/players" element={<Players players={players}/>} />
    </Routes>
    </>
  );
}

export default App;
