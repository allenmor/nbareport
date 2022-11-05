import React from "react";
import { useState } from "react";
import "./Home.css";

function HomeCard({info, newInfo}) {
  const [clicked, setClicked] = useState(true)


  function handleReadMoreClick(){
    setClicked(prev => !prev)
  }

  let dateArr = []

  function dateForPost(date) {
    let a = date.split('')
    // }
    let b = []
    b.push('Updated', ' ', a[11], a[12],':', a[14], a[15], ' ', a[11] + a[12] > 12 ? 'pm' : 'am', ', ', a[5], a[6], a[7],a[8], a[9],a[4], a[0], a[1], a[2], a[3], ' ' )


    // }
    switch(b[2] + b[3]) {
      case '13':
        b[2] = '0'
        b[3] = '1'
        // code block
        break;
      case '14':
        // code block
        b[2] = '0'
        b[3] = '2'
        break;
      case '15':
        // code block
        b[2] = '0'
        b[3] = '3'
        break;
      case '16':
        // code block
        b[2] = '0'
        b[3] = '4'
        break;
      case '17':
        // code block
        b[2] = '0'
        b[3] = '5'
        break;
      case '18':
        // code block
        b[2] = '0'
        b[3] = '6'
        break;
      case '19':
        // code block
        b[2] = '0'
        b[3] = '7'
        break;
      case '20':
        // code block
        b[2] = '0'
        b[3] = '8'
        break;
      case '21':
        // code block
        b[2] = '0'
        b[3] = '9'
        break;
      case '22':
        // code block
        b[2] = ''
        b[3] = '10'
        break;
      case '23':
        // code block
        b[2] = ''
        b[3] = '11'
        break;
      case '24':
        // code block
        b[2] = ''
        b[3] = '12'
        break;
      default:
        // code block
    }
    let c = b.join('')

    dateArr.push(c)

    // console.log(dateArr)
  }

dateForPost(info.pubDate)
  return (
    <>
    <div className={clicked ? "eachNews-card" : "eachNews-card-expanded"}>
      <h1 className='eachNews-h1'>{info.title}</h1>
      <p className="newsDate">{dateArr[0]}</p>
      <img alt="newsImg" className="newsImg" src={info.thumbnail ? info.thumbnail : info.enclosure.link} />
      {info.link.includes("espn") ? <p className="newsDescription">{info.description}</p> :  <p className="newsDescription">{clicked ? info.description.replace(/<[^>]*>?/gm, '').split('.')[0] : info.description.replace(/<[^>]*>?/gm, '')}<button onClick={handleReadMoreClick} className="read-more">{clicked  ? "Read More" : "Read Less"}</button></p>}
    </div>
    </>
  );
}

export default HomeCard;
