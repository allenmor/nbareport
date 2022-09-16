import React from "react";
import "./Home.css";

function HomeCard({info}) {
  // console.log(info.thumbnail['_url'])
  return (
    <div className="eachNews-card">
      <h1 className='eachNews-h1'>{info.title}</h1>
      <p className="newsDate">{info.pubDate}</p>
      <img className="newsImg" src={info.thumbnail._url} />
      <p className="newsDescription">{info.description.replace(/<[^>]*>?/gm, '')}</p>

    </div>
  );
}

export default HomeCard;
