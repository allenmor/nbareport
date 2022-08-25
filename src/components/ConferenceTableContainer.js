import React from "react";
import { useState } from "react";
import ConferenceCard from "./ConferenceCard";
import "./ConferenceTableContainer.css";
function ConferenceTableContainer({ teams }) {
  const [clicked, setClicked] = useState(true);

  //EASTERN CONFERENCE
  let eastern = teams.filter((el, i) => {
    return el.cid == 0;
  });
  //WESTERN CONFERENCE
  let western = teams.filter((el, i) => {
    return el.cid == 1;
  });

  console.log(eastern)

  function handleClick() {
    setClicked((prev) => !prev);
  }

  return (
    <>
      <table>
        <caption>
        <button onClick={handleClick}>{clicked ? "Eastern Conference" : "Western Conference"}</button>
        </caption>
        <thead>
          <tr>
            <th scope="col">Logo</th>
            <th scope="col">Team Name</th>
            <th scope="col">Contention</th>
            <th scope="col">Years In The League</th>
          </tr>
        </thead>
        <tbody>
          {clicked
            ? eastern.map((el, i) => {
                return <ConferenceCard key={i} team={el} />;
              })
            : western.map((el, i) => {
                return <ConferenceCard key={i} team={el} />;
              })}
        </tbody>
      </table>
    </>
  );
}

export default ConferenceTableContainer;
