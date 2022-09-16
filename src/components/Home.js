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
      console.log(data.rss.channel.item)

      let info = data.rss.channel.item
      let newInfo = info.filter((el, i) => {
        return el.thumbnail
      })
      console.log(newInfo)
      setNews(newInfo)
      // console.l
    })
  },[])

  return (
    <div className="newsContainer">
      {news.map((el, i) => {
        return <HomeCard info={el} key={i} />
      })}
    </div>
  );
}

export default Home;
