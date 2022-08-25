import React from 'react'
import { useEffect, useState } from 'react'
import './Stadiums.css'
import Stadium from './Stadium'


function StadiumsContainer() {
  const[stadiums, setStadiums] = useState([])

    //FETCH GET INFO
    useEffect(() => {
      fetch('https://raw.githubusercontent.com/allenmor/nbareport/main/db.json')
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setStadiums(data.stadiums)
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
