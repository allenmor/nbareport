import React from 'react'
import { useState, useEffect } from 'react'

function SearchForPlayerCard({stats}) {
    const [stat, setstat] = useState({})
    const [teamName, setTeamName] = useState('')
    useEffect(() => {

        setstat(stats[Object.keys(stats)[0]])
        let first = stats[Object.keys(stats)[0]].teamName[0].region
        let last = stats[Object.keys(stats)[0]].teamName[0].name
        setTeamName(`${first} ${last}`)
    },[stats])



  return (
    <tr className='searchTr'>
    <td className='searchTd' data-label="YEAR">{stat.playoffs ? `${stat.season} Playoffs` : stat.season}</td>
    <td className='searchTd' data-label="TEAM">{teamName}</td>
    <td className='searchTd' data-label="GP">{stat.gp}</td>
    <td className='searchTd' data-label="PTS">{(stat.pts / stat.gp).toFixed(1)}</td>
    <td className='searchTd' data-label="REB">{((stat.orb + stat.drb) / stat.gp).toFixed(1)}</td>
    <td className='searchTd' data-label="AST">{(stat.ast / stat.gp).toFixed(1)}</td>
    <td className='searchTd' data-label="FG%">{((stat.fg / stat.fga) * 100).toFixed(1)}%</td>
    <td className='searchTd' data-label="3P%">{((stat.tp / stat.tpa) * 100).toFixed(1)}%</td>
    <td className='searchTd' data-label="3PM">{(stat.tp / stat.gp).toFixed(1)}</td>
    <td className='searchTd' data-label="STL">{(stat.stl / stat.gp).toFixed(1)}</td>
    <td className='searchTd' data-label="BLK">{(stat.blk /  stat.gp).toFixed(1)}</td>
    <td className='searchTd' data-label="TOV">{(stat.tov / stat.gp).toFixed(1)}</td>
  </tr>
  
  )
}

export default SearchForPlayerCard
