import React from 'react'
import PlayerCard from './PlayerCard'
import './Players.css'

function Players({players}) {

  // filter players that return a name

  return (
    <div className='players'>
      {players.map((el, i) => {
        return <PlayerCard key={i} player={el}/>
      })}
    </div>
  )
}

export default Players;
