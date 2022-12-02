import React from "react";
import './TodaysGame.css'

function TodaysGameCard({ game }) {
  // let logos = [
  //   {
  //     team: "Indiana Pacers",
  //     logo: "https://cdn.nba.com/logos/nba/1610612754/primary/L/logo.svg",
  //   },
  //   {
  //     team: "Philadelphia 76ers",
  //     logo: "https://cdn.nba.com/logos/nba/1610612755/primary/L/logo.svg",
  //   },
  //   {
  //     team: "Toronto Raptors",
  //     logo: "https://cdn.nba.com/logos/nba/1610612761/primary/L/logo.svg",
  //   },
  //   {
  //     team: "Miami Heat",
  //     logo: "https://content.sportslogos.net/logos/6/214/thumbs/burm5gh2wvjti3xhei5h16k8e.gif",
  //   },
  //   {
  //     team: "Orlando Magic",
  //     logo: "https://content.sportslogos.net/logos/6/217/thumbs/wd9ic7qafgfb0yxs7tem7n5g4.gif",
  //   },
  //   {
  //     team: "New York Knicks",
  //     logo: "https://content.sportslogos.net/logos/6/216/thumbs/2nn48xofg0hms8k326cqdmuis.gif",
  //   },
  //   {
  //     team: "Boston Celtics",
  //     logo: "https://content.sportslogos.net/logos/6/213/thumbs/slhg02hbef3j1ov4lsnwyol5o.gif",
  //   },
  //   {
  //     team: "Chicago Bulls",
  //     logo: "https://content.sportslogos.net/logos/6/221/thumbs/hj3gmh82w9hffmeh3fjm5h874.gif",
  //   },
  //   {
  //     team: "Utah Jazz",
  //     logo: "https://cdn.nba.com/logos/nba/1610612762/primary/L/logo.svg",
  //   },
  //   {
  //     team: "Houston Rockets",
  //     logo: "https://cdn.nba.com/logos/nba/1610612745/primary/L/logo.svg",
  //   },
  //   {
  //     team: "Brooklyn Nets",
  //     logo: "https://cdn.nba.com/logos/nba/1610612751/primary/L/logo.svg",
  //   },
  //   {
  //     team: "Memphis Grizzlies",
  //     logo: "https://cdn.nba.com/logos/nba/1610612763/primary/L/logo.svg",
  //   },
  //   {
  //     team: "San Antonio Spurs",
  //     logo: "https://content.sportslogos.net/logos/6/233/thumbs/23325472018.gif",
  //   },
  //   {
  //     team: "Minnesota Timberwolves",
  //     logo: "https://content.sportslogos.net/logos/6/232/thumbs/23296692018.gif",
  //   },
  //   {
  //     team: "Denver Nuggets",
  //     logo: "https://content.sportslogos.net/logos/6/229/thumbs/22989262019.gif",
  //   },
  //   {
  //     team: "Portland Trail Blazers",
  //     logo: "https://content.sportslogos.net/logos/6/239/thumbs/23997252018.gif",
  //   },
  //   {
  //     team: "Sacramento Kings",
  //     logo: "https://cdn.nba.com/logos/nba/1610612758/primary/L/logo.svg",
  //   },
  //   {
  //     team: "Washington Wizards",
  //     logo: "https://cdn.nba.com/logos/nba/1610612764/primary/L/logo.svg",
  //   },
  //   {
  //     team: "Atlanta Hawks",
  //     logo: "https://cdn.nba.com/logos/nba/1610612737/primary/L/logo.svg",
  //   },
  //   {
  //     team: "Milwaukee Bucks",
  //     logo: "https://cdn.nba.com/logos/nba/1610612749/primary/L/logo.svg",
  //   },
  //   {
  //     team: "Detroit Pistons",
  //     logo: "https://cdn.nba.com/logos/nba/1610612765/primary/L/logo.svg",
  //   },
  //   {
  //     team: "LA Clippers",
  //     logo: "https://cdn.nba.com/logos/nba/1610612746/primary/L/logo.svg",
  //   },
  //   {
  //     team: "Charlotte Hornets",
  //     logo: "https://cdn.nba.com/logos/nba/1610612766/primary/L/logo.svg",
  //   },
  //   {
  //     team: "Golden State Warriors",
  //     logo: "https://cdn.nba.com/logos/nba/1610612744/primary/L/logo.svg",
  //   },
  //   {
  //     team: "Oklahoma City Thunder",
  //     logo: "https://cdn.nba.com/logos/nba/1610612760/primary/L/logo.svg",
  //   }
  // ];

  // let away_logo = logos.filter((el, i) => {
  //   return el.team === game.awayTeam.teamCity + " " + game.awayTeam.teamName;
  // });
  // let home_logo = logos.filter((el, i) => {
  //   return el.team === game.homeTeam.teamCity + " " + game.homeTeam.teamName;
  // });



  return (
    <>


      <div className="each-game">
        <div className="away-home">
          <h4 className="team-names">
            {game.awayTeam.teamCity} {game.awayTeam.teamName}{" "}
          </h4>
            <img alt="logo" className="team-logos-games" src={game.awayTeam.teamLogo} />
              <p className="team-record">{game.awayTeam.wins} - {game.awayTeam.losses}</p>
        </div>

        <p className="time-of-game">{game.gameStatusText.replace('ET', '')}</p>
        <div className="away-home">
          <h4 className="team-names">
            {game.homeTeam.teamCity} {game.homeTeam.teamName}{" "}
          </h4>
            <img alt="logo" className="team-logos-games" src={game.homeTeam.teamLogo} />
              <p className="team-record">{game.homeTeam.wins} - {game.homeTeam.losses}</p>
        </div>
      </div>

    </>
  );
}

export default TodaysGameCard;
