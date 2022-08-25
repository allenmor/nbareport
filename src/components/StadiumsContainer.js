import React from 'react'
import { useEffect, useState } from 'react'
import './Stadiums.css'
import Stadium from './Stadium'


function StadiumsContainer() {
  const[stadiums, setStadiums] = useState([])

    //FETCH GET INFO
    useEffect(() => {
      fetch('http://localhost:3000/stadiums')
      .then(res => res.json())
      .then(data => {
        setStadiums(data)
      })
    },[])


  return (
    <div className='stadiumContainer'>
      {stadiums.map((el, i) => {
        return <Stadium key={i} stadium={el} />
      })}
    </div>
  )
}

export default StadiumsContainer;
