import React from 'react'
import './Standing.css'
import { useState } from 'react'

function Standing({team}) {
  const [clicked, setClicked] = useState(false)

  function handleClick(){
    setClicked(prev => !prev)
  }

  return (
  <tr className='standingTr'>

    <td style={clicked ? { backgroundColor: 'rgb(56,171,214)', color : 'black'} : {color: 'rgb(189,193,197)'}} onClick={() => handleClick()}  className="standingTd sticky-col" data-label="Team Name">
    {`${team.Rk}. ${team.Team}`}
    </td>
    <td style={clicked ? { backgroundColor: 'rgb(56,171,214)', color : 'black'} : {color: 'rgb(189,193,197)'}} onClick={() => handleClick()} className="standingTd" data-label="Contention">
    {team.win}
    </td>
    <td style={clicked ? { backgroundColor: 'rgb(56,171,214)', color : 'black'} : {color: 'rgb(189,193,197)'}} onClick={() => handleClick()} className="standingTd" data-label="Years In The League">
      {team.loss}
    </td>
    <td style={clicked ? { backgroundColor: 'rgb(56,171,214)', color : 'black'} : {color: 'rgb(189,193,197)'}} onClick={() => handleClick()} className="standingTd" data-label="Logo">
    {team.Home}
    </td>
    <td style={clicked ? { backgroundColor: 'rgb(56,171,214)', color : 'black'} : {color: 'rgb(189,193,197)'}} onClick={() => handleClick()} className="standingTd" data-label="Team Name">
    {team.Road}
    </td>
    <td style={clicked ? { backgroundColor: 'rgb(56,171,214)', color : 'black'} : {color: 'rgb(189,193,197)'}} onClick={() => handleClick()} className="standingTd" data-label="Contention">
    {team.stats['FG%']}
    </td>
    <td style={clicked ? { backgroundColor: 'rgb(56,171,214)', color : 'black'} : {color: 'rgb(189,193,197)'}} onClick={() => handleClick()} className="standingTd" data-label="Years In The League">
    {team.stats['3P']}
    </td>
    <td style={clicked ? { backgroundColor: 'rgb(56,171,214)', color : 'black'} : {color: 'rgb(189,193,197)'}} onClick={() => handleClick()} className="standingTd" data-label="Logo">
    {team.stats['3PA']}
    </td>
    <td style={clicked ? { backgroundColor: 'rgb(56,171,214)', color : 'black'} : {color: 'rgb(189,193,197)'}} onClick={() => handleClick()} className="standingTd" data-label="Team Name">
    {team.stats['3P%']}
    </td>
    <td style={clicked ? { backgroundColor: 'rgb(56,171,214)', color : 'black'} : {color: 'rgb(189,193,197)'}} onClick={() => handleClick()} className="standingTd" data-label="Contention">
    {team.stats['2P']}
    </td>
    <td style={clicked ? { backgroundColor: 'rgb(56,171,214)', color : 'black'} : {color: 'rgb(189,193,197)'}} onClick={() => handleClick()} className="standingTd" data-label="Years In The League">
    {team.stats['2PA']}
    </td>
    <td style={clicked ? { backgroundColor: 'rgb(56,171,214)', color : 'black'} : {color: 'rgb(189,193,197)'}} onClick={() => handleClick()} className="standingTd" data-label="Logo">
    {team.stats['2P%']}
    </td>
    <td style={clicked ? { backgroundColor: 'rgb(56,171,214)', color : 'black'} : {color: 'rgb(189,193,197)'}} onClick={() => handleClick()} className="standingTd" data-label="Team Name">
    {team.stats['FT%']}
    </td>
    <td style={clicked ? { backgroundColor: 'rgb(56,171,214)', color : 'black'} : {color: 'rgb(189,193,197)'}} onClick={() => handleClick()} className="standingTd" data-label="Contention">
    {team.stats['ORB']}
    </td>
    <td style={clicked ? { backgroundColor: 'rgb(56,171,214)', color : 'black'} : {color: 'rgb(189,193,197)'}} onClick={() => handleClick()} className="standingTd" data-label="Years In The League">
    {team.stats['DRB']}
    </td>
    <td style={clicked ? { backgroundColor: 'rgb(56,171,214)', color : 'black'} : {color: 'rgb(189,193,197)'}} onClick={() => handleClick()} className="standingTd" data-label="Logo">
    {team.stats['TRB']}
    </td>
    <td style={clicked ? { backgroundColor: 'rgb(56,171,214)', color : 'black'} : {color: 'rgb(189,193,197)'}} onClick={() => handleClick()} className="standingTd" data-label="Team Name">
    {team.stats['AST']}
    </td>
    <td style={clicked ? { backgroundColor: 'rgb(56,171,214)', color : 'black'} : {color: 'rgb(189,193,197)'}} onClick={() => handleClick()} className="standingTd" data-label="Contention">
    {team.stats['STL']}
    </td>
    <td style={clicked ? { backgroundColor: 'rgb(56,171,214)', color : 'black'} : {color: 'rgb(189,193,197)'}} onClick={() => handleClick()} className="standingTd" data-label="Years In The League">
    {team.stats['BLK']}
    </td>
    <td style={clicked ? { backgroundColor: 'rgb(56,171,214)', color : 'black'} : {color: 'rgb(189,193,197)'}} onClick={() => handleClick()} className="standingTd" data-label="Years In The League">
    {team.stats['TOV']}
    </td>
  </tr>
  )
}

export default Standing;
