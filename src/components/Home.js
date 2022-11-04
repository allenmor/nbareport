import React, { useEffect } from "react";
import { useState} from "react";
import HomeCard from "./HomeCard";
import "./Home.css";
import $ from 'jquery'
function Home() {

  // const [news, setNews] = useState([])
  const [newNews, setNewNews] = useState([])

  useEffect(()=>{
  
    
      // AJAX 
      $.ajax({
        url: 'https://api.rss2json.com/v1/api.json',
        method: 'GET',
        dataType: 'json',
        data: {
            rss_url: 'https://basketball.realgm.com/rss/wiretap/0/0.xml',
        }
    }).done(function (response) {
      // if(response.status !== 'ok'){ throw response.message; }
      setNewNews(response.items)
      console.log(response)

    // console.log(data)
    // console.log('====== ' + response.feed.title + ' ======');
    
    // for(var i in response.items){
    //     var item = response.items[i];
    //     // console.log(item);
    
    // }
    });
    
    // AJAX 
  },[])
  // console.log(newNews)


  // OLD FETCH FOR NEWS 

  // useEffect(() => {
  //   fetch('https://raw.githubusercontent.com/allenmor/nbareport/main/news.json')
  //   .then(res => res.json())
  //   .then(data => {
  //     console.log(data)
  //     let info = data.rss.channel.item
  //     let newInfo = info.filter((el, i) => {
  //       return el.thumbnail
  //     })
  //     let removeG = newInfo.filter(function (str) { return !str.title.toLowerCase().includes('realgm') && !str.description.toLowerCase().includes('realgm'); })
  //     setNews(removeG)
  //   })
  // },[])


  let images = ['https://s.yimg.com/ny/api/res/1.2/FIN2wKGSW9I3I5rAlPm4Pg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQyNw--/https://s.yimg.com/os/creatr-uploaded-images/2022-11/16134050-5b38-11ed-bd37-25f76a4867cf', 'https://sports.inquirer.net/files/2022/11/tyler-herro-nba-miami-heat-copy.jpg', 'https://cdn.vox-cdn.com/thumbor/gEDsLFFlGNZTMyNews-Y2UJ6gAM=/0x0:2734x4108/1820x1213/filters:focal(1153x832:1589x1268):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/71577896/1244442150.0.jpg', 'https://cdn.vox-cdn.com/thumbor/IrXolGcwLN_HdUxgDEXr3scXkno=/0x0:2500x1675/1200x800/filters:focal(1050x638:1450x1038)/cdn.vox-cdn.com/uploads/chorus_image/image/71579238/usa_today_19348635.0.jpg',  ]

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
    </div>
  );
}

export default Home;
