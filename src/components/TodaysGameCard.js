import React from "react";
import './TodaysGame.css'




function TodaysGameCard({ game, teamClicked }) {




  function handleAwayClick() {
    teamClicked(true, game.awayTeam.teamTricode, `${game.awayTeam.teamCity} ${game.awayTeam.teamName}`)

  }

  function handleHomeClick() {
    teamClicked(true, game.homeTeam.teamTricode, `${game.homeTeam.teamCity} ${game.homeTeam.teamName}`)

  }

  let gameDate = `${game.gameDateEst[5]}${game.gameDateEst[6]}/${game.gameDateEst[8]}${game.gameDateEst[9]}/${game.gameDateEst[0]}${game.gameDateEst[1]}${game.gameDateEst[2]}${game.gameDateEst[3]}`


  return (
    <>
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
        </div>
        <div onClick={handleHomeClick} className="away-home">
          <h4 className="team-names">
            {game.homeTeam.teamCity} {game.homeTeam.teamName}{" "}
          </h4>
            <img alt="logo" className="team-logos-games" src={game.homeTeam.teamLogo} />
              <p className="team-record">{game.homeTeam.wins} - {game.homeTeam.losses}</p>
        </div>
      </div>
    </>
  );
}

export default TodaysGameCard;
