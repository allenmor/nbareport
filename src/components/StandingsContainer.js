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
    useEffect(() => {
      fetch('https://raw.githubusercontent.com/allenmor/nbareport/main/teamStats.json')
      .then(res => res.json())
      .then(data => {
        console.log(data)
      })
    },[])


  return (
    <div>
      <script src="https://widgets.sports-reference.com/wg.fcgi?css=1&site=bbr&url=%2Fleagues%2FNBA_2022_standings.html&div=div_expanded_standings"></script>
    </div>
  )
}

export default StandingsContainer;
