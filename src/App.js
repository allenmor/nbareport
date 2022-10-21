import "./App.css";
import React from "react";
import FrontPage from "./components/FrontPage";
import { Route, Routes } from "react-router-dom";
import StandingsContainer from "./components/StandingsContainer";
import Stats from "./components/Stats";
import NavBar from "./components/NavBar";
import SearchForPlayer from "./components/SearchForPlayer";
import TopTenContainer from "./components/TopTenContainer";
import { useState, useEffect } from "react";

function App() {
  const [teams, setTeams] = useState([]);
  const [players, setPlayers] = useState([]);

  //FETCH GET INFO
  useEffect(() => {
    fetch("https://raw.githubusercontent.com/allenmor/nbareport/main/db.json")
      .then((res) => res.json())
      .then((data) => {
        setTeams(data.data[0].teams);
        setPlayers(data.data[0].players);
      });
  }, []);
  return (
    <>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/standings" element={<StandingsContainer />} />
        <Route path="/stats" element={<Stats />} />
        <Route
          path="/searchforplayer"
          element={<SearchForPlayer teams={teams} players={players} />}
        />
        <Route path="/news" element={<TopTenContainer />} />
      </Routes>
    </>
  );
}

export default App;



// rails g model player "2P":integer "2P%":float "2PA":integer "3P":integer "3P%":float "3PA":integer "AST":integer "Age":integer "BLK":integer "DRB":integer "FG":integer "FG%":float "FGA":integer "FT":integer "FT%":float "FTA":integer "G":integer "GS":integer "MP":integer "ORB":integer "PF":integer "PTS":integer "Player" "Player-additional" "Pos" "Rk":integer "STL":integer "TOV":integer "TRB":integer "Tm" "eFG%":float season      



// def player 
// player = Player.create(
//     "2P": params["2P"],
//     "2P%": params["2P%"],
//     "2PA": params["2PA"],
//     "3P": params["3P"],
//     "3P%": params["3P%"],
//     "3PA": params["3PA"],
//     "AST": params["AST"],
//     "Age": params["Age"],
//     "BLK": params["BLK"],
//     "DRB": params["DRB"],
//     "FG": params["FG"],
//     "FG%": params["FG%"],
//     "FGA": params["FGA"],
//     "FT": params["FT"],
//     "FT%": params["FT%"],
//     "FTA": params["FTA"],
//     "G": params["G"],
//     "GS": params["GS"],
//     "MP": params["MP"],
//     "ORB": params["ORB"],
//     "PF": params["PF"],
//     "PTS": params["PTS"],
//     "Player": params["Player"],
//     "Player-additional": params["Player-additional"],
//     "Pos": params["Pos"],
//     "Rk": params["Rk"],
//     "STL": params["STL"],
//     "TOV": params["TOV"],
//     "TRB": params["TRB"],
//     "Tm": params["Tm"],
//     "eFG%": params["eFG%"],
//     "season": '2021',
// )
// render json: player 
// end 

// def all_players 
// render json: Player.all 
// end

// post '/player', to: 'players#player'
// get '/players', to: 'players#all_players'