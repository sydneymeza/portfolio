import React from "react";
import { NavLink } from "react-router-dom";

const MixMate = () => {
  return (
    <div className="Page">
      <div className="workLanding">
        <h1 className="top">Mix Mate</h1>
      </div>
      <h1 className="studyTitle">Mix Mate</h1>
      <hr style={{ width: "84vw" }} />
      <h2 className="studySection">Overview</h2>
      <hr style={{ width: "76vw" }} />
      <p>created a playlist making website!</p>
      <h2 className="studySection">Context/Problem</h2>
      <hr style={{ width: "76vw" }} />
      <p>wanted to learn react</p>
      <h2 className="studySection">Research</h2>
      <hr style={{ width: "76vw" }} />
      <p>
        bc this is a website did competitive comparison noticed that each
        webiste had this
      </p>
      <h2 className="studySection">Process</h2>
      <hr style={{ width: "76vw" }} />
      <p>
        sketches -{`>`} lofi -{`>`} style guide -{`>`} high fidelity.{" "}
      </p>
      <h2 className="studySection">Solution</h2>
      <hr style={{ width: "76vw" }} />
      <p>
        used react! it's now this playlist making website!! needs improvement
      </p>
      <h2 className="studySection">Key Takeaways</h2>
      <p>
        react is hard ! but it's also fun and it creates new ways that designers
        need to think about because something is reacting to a user. what will
        each phase look like ....
      </p>
      <div className="buttons">
        <NavLink>Menominee Redesign</NavLink>
        <NavLink>Warp Home</NavLink>
      </div>
    </div>
  );
};

export default MixMate;
