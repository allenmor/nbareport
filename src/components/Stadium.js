import React from 'react'
import './Stadiums.css'

function Stadium({stadium}) {
  return (
    <div className='eachStadium'>
        <div className="card">
      <div className="img-wrap">
      <img className='stadiumImage' src={stadium.imageOut}/>

      </div>
      
        <div className='stadiumInfo'>
            <p>{stadium.name}</p>
            <p>{stadium.team}</p>
        </div>
        </div>
    </div>
  )
}

export default Stadium;
