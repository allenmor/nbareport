import React from "react";
import NewsCard from "./NewsCard";
import { useState, useEffect } from "react";
import "./News.css";

function NewsContainer() {

    const [news, setNews] = useState([])
    
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/allenmor/nbareport/main/news.json')
        .then(res => res.json())
        .then(data => {
            setNews(data)
            
        })
    },[])
  return (
    <div className="tilesDiv">
      <div className="list-type5">
        <ol>
            {news.map((el, i) => {
                return <NewsCard key={i} news={el}/>
            })}
        </ol>
      </div>
    </div>
  );
}

export default NewsContainer;
