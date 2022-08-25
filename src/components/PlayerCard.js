import React from 'react'

function PlayerCard({player}) {
  return (
    <div className='each-player'>
    <h1 className='name'>{player.name}</h1>
    <img src={player.imgURL}></img>
    <div className='description'>
    <h2>Guard</h2>
    <h3>Height</h3>
    </div>
    </div>
  )
}

export default PlayerCard;