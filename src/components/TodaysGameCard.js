import React from 'react'

function TodaysGameCard({game}) {
  return (
    <div>
        <h4>{game.awayTeam.teamCity} {game.awayTeam.teamName} <span>{game.awayTeam.wins} - {game.awayTeam.losses}</span> @ {game.homeTeam.teamCity} {game.homeTeam.teamName} <span>{game.homeTeam.wins} - {game.homeTeam.losses}</span></h4>
        <p>{game.gameStatusText}</p>
    </div>
  )
}


export default TodaysGameCard