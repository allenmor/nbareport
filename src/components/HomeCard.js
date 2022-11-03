import React from "react";
import { useState } from "react";
import "./Home.css";

function HomeCard({info}) {
  const [clicked, setClicked] = useState(true)

  function handleReadMoreClick(){
    setClicked(prev => !prev)
  }
  return (
    <>
    <div className={clicked ? "eachNews-card" : "eachNews-card-expanded"}>
      <h1 className='eachNews-h1'>{info.title}</h1>
      <p className="newsDate">{info.pubDate}</p>
      <img alt="newsImg" className="newsImg" src={info.thumbnail._url} />
      { <p className="newsDescription">{clicked ? info.description.replace(/<[^>]*>?/gm, '').split('.')[0] : info.description.replace(/<[^>]*>?/gm, '')}<button onClick={handleReadMoreClick} className="read-more">{clicked  ? "Read More" : "Read Less"}</button></p>}
    </div>
    </>
  );
}

export default HomeCard;
