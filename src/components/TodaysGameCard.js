import React from "react";
import './TodaysGame.css'

function TodaysGameCard({ game }) {
  let logos = [
    {
      team: "Indiana Pacers",
      logo: "https://content.sportslogos.net/logos/6/218/thumbs/21870342016.gif",
    },
    {
      team: "Philadelphia 76ers",
      logo: "https://content.sportslogos.net/logos/6/224/thumbs/22448122018.gif",
    },
    {
      team: "Toronto Raptors",
      logo: "https://content.sportslogos.net/logos/6/227/thumbs/22770242021.gif",
    },
    {
      team: "Miami Heat",
      logo: "https://content.sportslogos.net/logos/6/214/thumbs/burm5gh2wvjti3xhei5h16k8e.gif",
    },
    {
      team: "Orlando Magic",
      logo: "https://content.sportslogos.net/logos/6/217/thumbs/wd9ic7qafgfb0yxs7tem7n5g4.gif",
    },
    {
      team: "New York Knicks",
      logo: "https://content.sportslogos.net/logos/6/216/thumbs/2nn48xofg0hms8k326cqdmuis.gif",
    },
    {
      team: "Boston Celtics",
      logo: "https://content.sportslogos.net/logos/6/213/thumbs/slhg02hbef3j1ov4lsnwyol5o.gif",
    },
    {
      team: "Chicago Bulls",
      logo: "https://content.sportslogos.net/logos/6/221/thumbs/hj3gmh82w9hffmeh3fjm5h874.gif",
    },
    {
      team: "Utah Jazz",
      logo: "https://content.sportslogos.net/logos/6/234/thumbs/23485132023.gif",
    },
    {
      team: "Houston Rockets",
      logo: "https://content.sportslogos.net/logos/6/230/thumbs/23068302020.gif",
    },
    {
      team: "Brooklyn Nets",
      logo: "https://content.sportslogos.net/logos/6/3786/thumbs/hsuff5m3dgiv20kovde422r1f.gif",
    },
    {
      team: "Memphis Grizzlies",
      logo: "https://content.sportslogos.net/logos/6/231/thumbs/23143732019.gif",
    },
    {
      team: "San Antonio Spurs",
      logo: "https://content.sportslogos.net/logos/6/233/thumbs/23325472018.gif",
    },
    {
      team: "Minnesota Timberwolves",
      logo: "https://content.sportslogos.net/logos/6/232/thumbs/23296692018.gif",
    },
    {
      team: "Denver Nuggets",
      logo: "https://content.sportslogos.net/logos/6/229/thumbs/22989262019.gif",
    },
    {
      team: "Portland Trail Blazers",
      logo: "https://content.sportslogos.net/logos/6/239/thumbs/23997252018.gif",
    },
    {
      team: "Sacramento Kings",
      logo: "https://content.sportslogos.net/news/2016/04/Kings-New-Logo-confirmed.png",
    },
    {
      team: "Washington Wizards",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/0/02/Washington_Wizards_logo.svg/640px-Washington_Wizards_logo.svg.png",
    },
    {
      team: "Atlanta Hawks",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/2/24/Atlanta_Hawks_logo.svg/1200px-Atlanta_Hawks_logo.svg.png",
    },
    {
      team: "Milwaukee Bucks",
      logo: "https://cdn.nba.com/teams/uploads/sites/1610612749/2022/03/1150409-wallpaper-primary-640x480-1.jpg",
    },
    {
      team: "Detroit Pistons",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Pistons_logo17.svg/1200px-Pistons_logo17.svg.png",
    },
    {
      team: "LA Clippers",
      logo: "https://cdn.shopify.com/s/files/1/1949/1233/products/la-clippers.jpg?v=1575428341",
    },
    {
      team: "Charlotte Hornets",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c4/Charlotte_Hornets_%282014%29.svg/800px-Charlotte_Hornets_%282014%29.svg.png",
    }
  ];

  let away_logo = logos.filter((el, i) => {
    return el.team === game.awayTeam.teamCity + " " + game.awayTeam.teamName;
  });
  let home_logo = logos.filter((el, i) => {
    return el.team === game.homeTeam.teamCity + " " + game.homeTeam.teamName;
  });



  return (
    <>
    <div className="game-container">

      <div className="each-game">
        <div className="away-home">
            <img alt="logo" className="team-logos-games" src={away_logo[0].logo} />
          <h4>
            {game.awayTeam.teamCity} {game.awayTeam.teamName}{" "}
          </h4>
              <p>{game.awayTeam.wins} - {game.awayTeam.losses}</p>
        </div>
        <p className="at-sign">@</p>
        <div className="away-home">
            <img alt="logo" className="team-logos-games" src={home_logo[0].logo} />
          <h4>
            {game.homeTeam.teamCity} {game.homeTeam.teamName}{" "}
          </h4>
              <p>{game.homeTeam.wins} - {game.homeTeam.losses}</p>
        </div>
      </div>
        <p>{game.gameStatusText}</p>
    </div>
    </>
  );
}

export default TodaysGameCard;
