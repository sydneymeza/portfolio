import React from "react";
import { NavLink } from "react-router-dom";

export default function CaseStudyCard(props) {
  return (
    <div className="card">
    <NavLink className="cardNav" to={"/" + props.caseStudy} activeStyle>
      <div className="caseCard">
        <div className="container">
          <p> womp womp</p>
        </div>

        <div className="cardBottom">
          <h1 className="largeCardText">{props.name}</h1>
          <h3 className="smallCardText">{props.description}</h3>
        </div>
        {/* <div className="flexible"></div>
        <h1 className="songTitle">{props.name}</h1>
        <div className="flexible"></div>
        <p className="songArtist">{props.description}</p>
        <div className="flexible"></div> */}
      </div>
    </NavLink>
    </div>
  );
}
