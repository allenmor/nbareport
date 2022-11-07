import React from 'react'
import { useState } from "react";
import "./Home.css";
function SLAMCard({info}) {
    const [clicked, setClicked] = useState(true)


    function handleReadMoreClick(){
      setClicked(prev => !prev)
    }


    let c = []
    let a = info.title.split('')
    for(let i = 0; i < a.length; i++) {
        if(a[i] === '&' && a[i + 6] == ';'){
            a[i] = ''
            a[i + 1] = ''
            a[i + 2] = ''
            a[i + 3] = ''
            a[i + 4] = ''
            a[i + 5] = ''
            a[i + 6] = ''
            c.push(a[i])
        } else {
            c.push(a[i])
        }
    }
    let newTitle = c.join('')





    let d = []
    let b = info.description.split('')
    for(let i = 0; i < b.length; i++) { 

        if(b[i] === '[' || b[i] == ']') {
            b[i] = ''
        }

        if(b[i] == 'S' && b[i + 3] == 'M') {
          b[i] = 'NBA'
          b[i + 1] = ''
          b[i + 2] = ' '
          b[i + 3] = 'Report'  
        }


        if(b[i] === '&' && b[i + 6] == ';'){
            b[i] = ''
            b[i + 1] = ''
            b[i + 2] = ''
            b[i + 3] = ''
            b[i + 4] = ''
            b[i + 5] = ''
            b[i + 6] = ''
            d.push(b[i])
        } else {
            d.push(b[i])
        }

    }

    let newsDescription = d.join('')


  return (
    <>
    <div className={clicked ? "eachNews-card" : "eachNews-card-expanded"}>
      <h1 className='eachNews-h1-slam'>{newTitle}</h1>
      <p className="newsDate">{info.pubDate}</p>
      {/* <img alt="newsImg" className="newsImg" src={info.enclosures[0].url} /> */}
      {info.link.includes("espn") ? <p className="newsDescription">{info.description}</p> :  <p className="newsDescription">{clicked ? newsDescription.replace(/<[^>]*>?/gm, '').split('.')[0] : newsDescription.replace(/<[^>]*>?/gm, '')}<button onClick={handleReadMoreClick} className="read-more">{clicked  ? "Read More" : "Read Less"}</button></p>}
    </div>
    </>
  )
}


export default SLAMCard