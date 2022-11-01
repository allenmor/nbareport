import React from 'react'
import { useEffect, useState } from 'react'
import TodaysGameCard from './TodaysGameCard'
import './TodaysGame.css'


function TodaysGames() {

    const [games, setGames] = useState([])
    const [date, setDate] = useState('')
    useEffect(()=>{
    fetch('https://raw.githubusercontent.com/allenmor/nbareport/main/todaysGames.json')
    .then(res => res.json())
    .then(data => {
        setGames(data.scoreboard.games)
        setDate(data.scoreboard.gameDate)
    })
    },[])

  return (
    <div className='todays-games-div'>
        <h1 className='date'>{date}</h1>
        {games.map((el, i) => {
            return <TodaysGameCard game={el} key={i}/>
        })}
    </div>
  )
}

export default TodaysGames