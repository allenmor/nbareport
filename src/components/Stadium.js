import React from 'react'
import './Stadiums.css'
import { useState } from 'react'

function Stadium({stadium}) {
    const[clicked, setClicked] = useState(true)

    function handleClick(){
        setClicked(prev => !prev)
    }
  return (
    <div onClick={handleClick} className='eachStadium'>
        <div className="card">
      <div className="img-wrap">
      <img className='stadiumImage' src={clicked ? stadium.imageOut : stadium.imageIn}/>

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
