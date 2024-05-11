import React from "react";
import { NavLink } from "react-router-dom";

export default function CaseStudyCard(props) {
  if (props.able === "able"){
  return (
    <div className={"card " + props.able}>
      <NavLink
        className={"cardNav " + props.able}
        to={"/" + props.caseStudy}
        activeStyle
      >
        {/* <p>womp womp</p> */}
        <div className="caseCard">
          <div className={"container " + props.number}>
            <img
              className="cardImage"
              src={process.env.PUBLIC_URL + "/images/" + props.img}
            ></img>
          </div>

          <div className="cardBottom">
            <h1 className="largeCardText">{props.name}</h1>
            <h3 className="smallCardText">{props.description}</h3>
            <h3 className="smallCardText">{props.skills}</h3>
          </div>
        </div>
      </NavLink>
    </div>
  );
} else{
  return (
    <div className="card disable">
      <div className="cardNav disable">
        {/* <p>womp womp</p> */}
        <div className="caseCard disable">
          <div className={"container " + props.number}>
            <img
              className="cardImage"
              src={process.env.PUBLIC_URL + "/images/" + props.img}
            ></img>
          </div>

          <div className="cardBottom">
            <h1 className="largeCardText">{props.name}</h1>
            <h3 className="smallCardText">{props.description}</h3>
            <h3 className="smallCardText">{props.skills}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
}
