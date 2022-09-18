import React from 'react'

function PointsLeaders({player}) {
console.log(player)
  return (
    <div className='eachPlayerPointDiv'>
        <p>
            {player.Player}
            {player.PTS}
        </p>
    </div>
  )
}

export default PointsLeaders;
