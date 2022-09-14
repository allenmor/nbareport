import React from 'react'
import { useEffect, useState } from 'react'
import './Standing.css'
import Standing from './Standing'


function StandingsContainer() {
    //FETCH GET INFO
    useEffect(() => {
      fetch('https://raw.githubusercontent.com/allenmor/nbareport/main/currentStandings.json')
      .then(res => res.json())
      .then(data => {
        console.log(data)
      })
    },[])


  return (
    <div>
    </div>
  )
}

export default StandingsContainer;
