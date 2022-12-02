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

        // setGames(response.data[0]) 
        setGames(response.data[0].games)
      }).catch(function (error) {
        console.error(error);
      });
    },[])

    // TODAYS DATE
    let today = String(new Date())
    let changeUpDate = today.split('')
    let dateArr = []
    for(let i = 0; i < changeUpDate.length; i++) {
      dateArr.push(changeUpDate[i])
      if(changeUpDate[i] === '2' && changeUpDate[i - 1] === '2' && changeUpDate[i - 2] === '0' && changeUpDate[i - 3] === '2') {
        break
      }
    }

    //TODAYS DATE
    // AJAX 
  
    let date = dateArr.join('')
    console.log(games)
  return (
    <div className='todays-games-div'>
        <h1 className='date'>Today's Games</h1>
        <h1 className='date'>{date}</h1>
        {games.map((el, i) => {
            return <TodaysGameCard game={el} key={i}/>
        })}
    </div>
  )
}

export default TodaysGames