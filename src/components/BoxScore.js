import React from "react";
import axios from "axios";
import BoxScoreCard from "./BoxScoreCard";
import "./BoxScore.css";
import { useState, useEffect } from "react";

function BoxScore({ away, home, boxScore, homeName, awayName }) {
  console.log(boxScore);

  return (
    <div className="boxscore-div">
        {boxScore.lineScore && <table className="total-points-table-div">
            <thead>
                <tr>
                    <th>Team</th>
                    <th>1</th>
                    <th>2</th>
                    <th>3</th>
                    <th>4</th>
                    <th>T</th>
                </tr>
            </thead>
            <tbody className="total-points-tbody">
                <tr className="total-points-tr">
                    <td>{awayName}</td>
                    <td>{boxScore.lineScore[away]['1Q']}</td>
                    <td>{boxScore.lineScore[away]['2Q']}</td>
                    <td>{boxScore.lineScore[away]['3Q']}</td>
                    <td>{boxScore.lineScore[away]['4Q']}</td>
                    <td>{boxScore.lineScore[away].totalPts}</td>
                </tr>
                <tr className="total-points-tr">
                    <td>{homeName}</td>
                    <td>{boxScore.lineScore[home]['1Q']}</td>
                    <td>{boxScore.lineScore[home]['2Q']}</td>
                    <td>{boxScore.lineScore[home]['3Q']}</td>
                    <td>{boxScore.lineScore[home]['4Q']}</td>
                    <td>{boxScore.lineScore[home].totalPts}</td>
                </tr>
            </tbody>
        </table>}
    </div>
  );
}

export default BoxScore;
