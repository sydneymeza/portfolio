import React from "react";
import { NavLink } from "react-router-dom";

export default function CaseStudyCard(props) {
  return (
    <div className="card">
      <NavLink className="cardNav" to={"/" + props.caseStudy} activeStyle>
        {/* <p>womp womp</p> */}
        <div className="caseCard">
          <div className="container">
            <img className="cardImage" src={process.env.PUBLIC_URL + "/images/" + props.img}></img>
          </div>

          <div className="cardBottom">
            <h1 className="largeCardText">{props.name}</h1>
            <h3 className="smallCardText">{props.description}</h3>
          </div>
        </div>
      </NavLink>
    </div>
  );
}
