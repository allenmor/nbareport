import React from 'react'

function PointsLeaders({player}) {

  return (
    <div className='eachPlayerPointDiv'>
        <p>
            {player.Player}
        </p>
    </div>
  )
}

export default PointsLeaders;
