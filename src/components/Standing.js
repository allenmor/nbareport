import React from 'react'
import './Standing.css'
import { useState } from 'react'

function Standing({team}) {

  return (
  <tr className='standingTr'>

    <td className="standingTd sticky-col" data-label="Team Name">
    {`${team.Rk}. ${team.Team}`}
    </td>
    <td className="standingTd" data-label="Contention">
    {team.win}
    </td>
    <td className="standingTd" data-label="Years In The League">
      {team.loss}
    </td>
    <td className="standingTd" data-label="Logo">
    {team.Home}
    </td>
    <td className="standingTd" data-label="Team Name">
    {team.Road}
    </td>
    <td className="standingTd" data-label="Contention">
    {team.stats['FG%']}
    </td>
    <td className="standingTd" data-label="Years In The League">
    {team.stats['3P']}
    </td>
    <td className="standingTd" data-label="Logo">
    {team.stats['3PA']}
    </td>
    <td className="standingTd" data-label="Team Name">
    {team.stats['3P%']}
    </td>
    <td className="standingTd" data-label="Contention">
    {team.stats['2P']}
    </td>
    <td className="standingTd" data-label="Years In The League">
    {team.stats['2PA']}
    </td>
    <td className="standingTd" data-label="Logo">
    {team.stats['2P%']}
    </td>
    <td className="standingTd" data-label="Team Name">
    {team.stats['FT%']}
    </td>
    <td className="standingTd" data-label="Contention">
    {team.stats['ORB']}
    </td>
    <td className="standingTd" data-label="Years In The League">
    {team.stats['DRB']}
    </td>
    <td className="standingTd" data-label="Logo">
    {team.stats['TRB']}
    </td>
    <td className="standingTd" data-label="Team Name">
    {team.stats['AST']}
    </td>
    <td className="standingTd" data-label="Contention">
    {team.stats['STL']}
    </td>
    <td className="standingTd" data-label="Years In The League">
    {team.stats['BLK']}
    </td>
    <td className="standingTd" data-label="Years In The League">
    {team.stats['TOV']}
    </td>
  </tr>
  )
}

export default Standing;
