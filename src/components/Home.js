import React, { useEffect } from "react";
import { useState} from "react";
import HomeCard from "./HomeCard";
import "./Home.css";
function Home() {

  const [news, setNews] = useState([])

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/allenmor/nbareport/main/news.json')
    .then(res => res.json())
    .then(data => {
      let info = data.rss.channel.item
      let newInfo = info.filter((el, i) => {
        return el.thumbnail
      })
      let removeG = newInfo.filter(function (str) { return !str.title.toLowerCase().includes('realgm') && !str.description.toLowerCase().includes('realgm'); })
      setNews(removeG)
    })
  },[])

  // console.log(news)
  return (
    <div className="newsContainer">
      {news.map((el, i) => {
        return <HomeCard info={el} key={i} />
      })}
    </div>
  );
}

export default Home;
