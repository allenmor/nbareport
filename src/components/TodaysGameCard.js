import React from "react";
import './TodaysGame.css'
import BoxScore from "./BoxScore";
import { useState } from "react";
import axios from "axios";

function TodaysGameCard({ game, teamClicked}) {


  const [boxScore, setBoxScore] = useState({})
  const [boxClicked, setBoxClicked] = useState(false)
  const [awayTeamTri, setAwayTeamTri] = useState('')
  const [homeTeamTri, setHomeTeamTri] = useState('')

  function handleAwayClick() {
    teamClicked(true, game.awayTeam.teamTricode, `${game.awayTeam.teamCity} ${game.awayTeam.teamName}`)

  }

  function handleHomeClick() {
    teamClicked(true, game.homeTeam.teamTricode, `${game.homeTeam.teamCity} ${game.homeTeam.teamName}`)

  }

  let gameDate = `${game.gameDateEst[5]}${game.gameDateEst[6]}/${game.gameDateEst[8]}${game.gameDateEst[9]}/${game.gameDateEst[0]}${game.gameDateEst[1]}${game.gameDateEst[2]}${game.gameDateEst[3]}`

  function handleBoxScoreClick() {
    setBoxClicked(prev => !prev)
    if(!boxScore.arena) {

      let away = game.awayTeam.teamTricode
      let home = game.homeTeam.teamTricode
      let date = game.gameCode
  
      let a = date.split('')
      let b = []
      if(away === 'PHX') {
  
         away = 'PHO'
      } else if(away === 'NOP') {
          away = 'NO'
      } else if(away === 'NYK') {
          away = 'NY'
      } else if(away === 'SAS') {
          away = 'SA'
      } else if(away === 'GSW') {
          away = 'GS'
      } 
      setAwayTeamTri(away)
      if(home === 'PHX') {
          home = 'PHO'
      } else if(home === 'NOP') {
          home = 'NO'
      } else if(home === 'NYK') {
          home = 'NY'
      } else if(home === 'SAS') {
          home = 'SA'
      } else if(home === 'GSW') {
          home = 'GS'
      } 
      setHomeTeamTri(home)
      for(let i = 0; i < a.length; i++) {
          if(a[i] === '/') {
              a[i] = '_'
              b.push(a[i])
              b.push(away)
              b.push('@')
              b.push(home)
              break
          }
          b.push(a[i])
      }
      let c = b.join('')
          const options = {
              method: 'GET',
              url: 'https://tank01-fantasy-stats.p.rapidapi.com/getNBABoxScore',
              params: {gameID: `${c}`},
              headers: {
                'X-RapidAPI-Key': '8cfd1121c5msh914ca13681907a5p1497f6jsn500f6dda8582',
                'X-RapidAPI-Host': 'tank01-fantasy-stats.p.rapidapi.com'
              }
            };
            
            axios.request(options).then(function (response) {
              setBoxScore(response.data.body)
            }).catch(function (error) {
              console.error(error);
            });
        

    }

  }



  return (
    <>
    <div className="each-gameDiv">
      <div className="each-game">
        <div onClick={handleAwayClick} className="away-home">
          <h4 className="team-names">
            {game.awayTeam.teamCity} {game.awayTeam.teamName}{" "}
          </h4>
            <img alt="logo" className="team-logos-games" src={game.awayTeam.teamLogo} />
              <p className="team-record">{game.awayTeam.wins} - {game.awayTeam.losses}</p>
        </div>
        <div className="gameInfoContainer">
        <p className="gameDate">{gameDate}</p>
        <div>
        <p className="gameScore">{game.awayTeam.score === 0 && game.homeTeam.score === 0 ? '' : game.awayTeam.score}</p>
        <p className="time-of-game">{game.gameStatusText.replace('ET', '')}</p>
        <p className="gameScore">{game.awayTeam.score === 0 && game.homeTeam.score === 0 ? '' : game.homeTeam.score}</p>
        </div>
        <button
        style={{
          width: '8rem',
          fontSize: '0.8rem',
          fontWeight: 'bold',
          whiteSpace: 'nowrap'
        }}
        onClick={handleBoxScoreClick}
                className="button-54"
                role="button"
              >
                Box Score
              </button>
        </div>
        <div onClick={handleHomeClick} className="away-home">
          <h4 className="team-names">
            {game.homeTeam.teamCity} {game.homeTeam.teamName}{" "}
          </h4>
            <img alt="logo" className="team-logos-games" src={game.homeTeam.teamLogo} />
              <p className="team-record">{game.homeTeam.wins} - {game.homeTeam.losses}</p>
        </div>
        <div>
        </div>
      </div>
      <div>
        {boxClicked && <BoxScore awayLogo={game.awayTeam.teamLogo} homeLogo={game.homeTeam.teamLogo} homeName={`${game.homeTeam.teamCity} ${game.homeTeam.teamName}`} awayName={`${game.awayTeam.teamCity} ${game.awayTeam.teamName}`} boxScore={boxScore} away={awayTeamTri} home={homeTeamTri}/>}
      </div>
    </div>
    </>
  );
}

export default TodaysGameCard;
