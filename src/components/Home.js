import React, { useEffect } from "react";
import { useState} from "react";
import HomeCard from "./HomeCard";
import "./Home.css";
import $ from 'jquery'
import ESPNCard from "./ESPNCard";
import SLAMCard from "./SLAMCard";
function Home() {

  // const [news, setNews] = useState([])
  const [newNews, setNewNews] = useState([])
  const [espn, setEspn] = useState([])
  const [slam, setSlam] = useState([])


  const { parse } = require('rss-to-json');


  // SLAM
  useEffect(()=>{
  // async await
  (async () => {

    var rss = await parse('https://www.slamonline.com/feed/');


    setSlam(JSON.parse(JSON.stringify(rss, null, 3)).items)


  })();
  
  },[])
  // SLAM

  // AJAX 

  // REAL GM 
  useEffect(()=>{
      $.ajax({
        url: 'https://api.rss2json.com/v1/api.json',
        method: 'GET',
        dataType: 'json',
        data: {
            rss_url: 'https://basketball.realgm.com/rss/wiretap/0/0.xml',
        }
    }).done(function (response) {
      if(response.status !== 'ok'){ throw response.message; }
      let a = response.items
      let b = a.filter((el, i) => {
      return !el.title.toLowerCase().includes('realgm')
    })
      setNewNews(b)
    });
    
  },[])
  // REAL GM 
  // AJAX 

        // AJAX ESPN
  useEffect(()=>{
    $.ajax({
      url: 'https://api.rss2json.com/v1/api.json',
      method: 'GET',
      dataType: 'json',
      data: {
          rss_url: 'https://www.espn.com/espn/rss/nba/news',
      }
  }).done(function (response) {
    if(response.status !== 'ok'){ throw response.message; }
    setEspn(response.items)
  });
  },[])
  // ESPN 
    // AJAX 

    // MOVING IMAGES ARRAY 
    let images = ['https://s.yimg.com/ny/api/res/1.2/FIN2wKGSW9I3I5rAlPm4Pg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQyNw--/https://s.yimg.com/os/creatr-uploaded-images/2022-11/16134050-5b38-11ed-bd37-25f76a4867cf', 'https://sports.inquirer.net/files/2022/11/tyler-herro-nba-miami-heat-copy.jpg', 'https://cdn.vox-cdn.com/thumbor/gEDsLFFlGNZTMyNews-Y2UJ6gAM=/0x0:2734x4108/1820x1213/filters:focal(1153x832:1589x1268):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/71577896/1244442150.0.jpg', 'https://cdn.vox-cdn.com/thumbor/IrXolGcwLN_HdUxgDEXr3scXkno=/0x0:2500x1675/1200x800/filters:focal(1050x638:1450x1038)/cdn.vox-cdn.com/uploads/chorus_image/image/71579238/usa_today_19348635.0.jpg',  ]

      for(let i = 0; i < newNews.length; i++) {
        images.push(newNews[i].thumbnail)
      }
      for(let i = 0; i < espn.length; i++) {
        images.push(espn[i].enclosure.link)
      }
      function shuffle(a) {
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    }
    shuffle(images)

    // MOVING IMAGES ARRAY 

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
      }, 3800)
      
      return () => clearInterval(intervalId);
  }, [currentIndex])

  // console.log(news)
  return (
    <div className="newsContainer">
      <img alt="current" className="moving-images" src={images[currentIndex]}/>
      {/* {news.map((el, i) => {
        return <HomeCard info={el} key={i} />
      })} */}
          {newNews.map((el, i) => {
            return <HomeCard info={el} key={i} />
          })}
        {espn.map((el, i) => {
          return <ESPNCard info={el} key={i} />
        })}
        {slam.map((el, i) => {
          return <SLAMCard info={el} key={i} />
           })}



    </div>
  );
}

export default Home;
