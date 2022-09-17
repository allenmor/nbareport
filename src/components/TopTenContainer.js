import React from "react";
import { useState, useEffect } from "react";
import PointsLeaders from "./PointsLeaders";
import AssistsLeaders from "./AssistsLeaders";
import ReboundsLeaders from "./ReboundsLeaders";
import StealsLeaders from "./StealsLeaders";
import BlocksLeaders from "./BlocksLeaders";
import ThreesMade from "./ThreesMade";
import TwosMade from "./TwosMade";
import TovsMade from "./TovsMade";
import "./TopTen.css";

function TopTenContainer() {
  const [points, setPoints] = useState([]);
  const [assists, setAssists] = useState([]);
  const [rebounds, setRebounds] = useState([]);
  const [steals, setSteals] = useState([]);
  const [blocks, setBlocks] = useState([]);
  const [threePm, setThreePm] = useState([]);
  const [twoPm, setTwoPct] = useState([]);
  const [tov, setTov] = useState([]);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/allenmor/nbareport/main/currentStats.json"
    )
      .then((res) => res.json())
      .then((data) => {
        //Sort points
        let point = data.sort((a, b) => b.PTS - a.PTS).slice(0, 10);
        setPoints(point);
        //Sort assists
        let assist = data.sort((a, b) => b.AST - a.AST).slice(0, 10);
        setAssists(assist);
        //Sort rebounds
        let rebound = data.sort((a, b) => b.TRB - a.TRB).slice(0, 10);
        setRebounds(rebound);
        //Sort steals
        let steal = data.sort((a, b) => b.STL - a.STL).slice(0, 10);
        setSteals(steal);
        //Sort blocks
        let block = data.sort((a, b) => b.BLK - a.BLK).slice(0, 10);
        setBlocks(block);
        //Sort threePointPct
        let three = data.sort((a, b) => b["3P"] - a["3P"]).slice(0, 10);
        setThreePm(three);
        //Sort twoPointPct
        let two = data.sort((a, b) => b["2P"] - a["2P"]).slice(0, 10);
        setTwoPct(two);
        //Sort turnovers
        let tovs = data.sort((a, b) => b.TOV - a.TOV).slice(0, 10);
        setTov(tovs);
      });
  }, []);
  
  return (
    <div className="allLeaders">
      <div className="section top">
        <h1 className="section-title">Points</h1>
        {points.map((el, i) => {
          return <PointsLeaders key={i} player={el} />;
        })}
      </div>
      <div className="section">
        <h1 className="section-title">Assits</h1>
        {assists.map((el, i) => {
          return <AssistsLeaders key={i} player={el} />;
        })}
      </div>
      <div className="section">
        <h1 className="section-title">Rebounds</h1>
        {rebounds.map((el, i) => {
          return <ReboundsLeaders key={i} player={el} />;
        })}
      </div>
      <div className="section">
        <h1 className="section-title">Steals</h1>
        {steals.map((el, i) => {
          return <StealsLeaders key={i} player={el} />;
        })}
      </div>
      <div className="section">
        <h1 className="section-title">Blocks</h1>
        {blocks.map((el, i) => {
          return <BlocksLeaders key={i} player={el} />;
        })}
      </div>
      <div className="section">
        <h1 className="section-title">Threes</h1>
        {threePm.map((el, i) => {
          return <ThreesMade key={i} player={el} />;
        })}
      </div>
      <div className="section">
        <h1 className="section-title">Twos</h1>
        {twoPm.map((el, i) => {
          return <TwosMade key={i} player={el} />;
        })}
      </div>
      <div className="section">
        <h1 className="section-title">Turnovers</h1>
        {tov.map((el, i) => {
          return <TovsMade key={i} player={el} />;
        })}
      </div>
    </div>
  );
}

export default TopTenContainer;
