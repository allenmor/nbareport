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

  let images = ['https://s.yimg.com/ny/api/res/1.2/FIN2wKGSW9I3I5rAlPm4Pg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQyNw--/https://s.yimg.com/os/creatr-uploaded-images/2022-11/16134050-5b38-11ed-bd37-25f76a4867cf', 'https://cdn.vox-cdn.com/thumbor/gEDsLFFlGNZTMyNews-Y2UJ6gAM=/0x0:2734x4108/1820x1213/filters:focal(1153x832:1589x1268):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/71577896/1244442150.0.jpg', 'https://cdn.vox-cdn.com/thumbor/IrXolGcwLN_HdUxgDEXr3scXkno=/0x0:2500x1675/1200x800/filters:focal(1050x638:1450x1038)/cdn.vox-cdn.com/uploads/chorus_image/image/71579238/usa_today_19348635.0.jpg' ]

  // CHANGE IMAGES 


  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
      const intervalId = setInterval(() => {
          if(currentIndex === images.length - 1) {
              setCurrentIndex(0);
          } 
          else {
               setCurrentIndex(currentIndex + 1);
          }
      }, 4000)
      
      return () => clearInterval(intervalId);
  }, [])

  // console.log(news)
  return (
    <div className="newsContainer">
      <img className="moving-images" src={images[currentIndex]}/>
      {news.map((el, i) => {
        return <HomeCard info={el} key={i} />
      })}
    </div>
  );
}

export default Home;
