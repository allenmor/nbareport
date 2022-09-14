import React from 'react'
import './Standing.css'
import { useState } from 'react'

function Standing() {
    const[clicked, setClicked] = useState(true)

    function handleClick(){
        setClicked(prev => !prev)
    }
  return (
    <div onClick={handleClick} className='eachStadium'>
    </div>
  )
}

export default Standing;
