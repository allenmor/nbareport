import React from 'react'
import { useEffect, useState } from 'react'
import TodaysGameCard from './TodaysGameCard'
import './TodaysGame.css'
import axios from 'axios'

function TodaysGames() {

    const [games, setGames] = useState([])

    useEffect(()=>{
      const options = {
        method: 'GET',
        url: 'https://nba-schedule.p.rapidapi.com/schedule',
        params: {date: '02-12-2022'},
        headers: {
          'X-RapidAPI-Key': '8cfd1121c5msh914ca13681907a5p1497f6jsn500f6dda8582',
          'X-RapidAPI-Host': 'nba-schedule.p.rapidapi.com'
        }
      };
      
      axios.request(options).then(function (response) {
        console.log(response.data)
        // setGames(response.data[0]) 
        setGames(response.data)
      }).catch(function (error) {
        console.error(error);
      });
    },[])
    // console.log(games)

  return (
    <div className='todays-games-div'>
        <h1 className='date'>{games[0].gameDate}</h1>
        {games[0].games.map((el, i) => {
            return <TodaysGameCard game={el} key={i}/>
        })}
    </div>
  )
}

export default TodaysGames