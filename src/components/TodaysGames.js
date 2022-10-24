import React from 'react'
import { useEffect, useState } from 'react'
import TodaysGameCard from './TodaysGameCard'


function TodaysGames() {

    const [games, setGames] = useState([])

    useEffect(()=>{
    fetch('https://raw.githubusercontent.com/allenmor/nbareport/main/todaysGames.json')
    .then(res => res.json())
    .then(data => {
        setGames(data.scoreboard.games)
    })
    },[])

  return (
    <div>
        {games.map((el, i) => {
            return <TodaysGameCard game={el} key={i}/>
        })}
    </div>
  )
}

export default TodaysGames