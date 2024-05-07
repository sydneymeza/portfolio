// Filename - pages/about.js

import React from "react";

const About = () => {
  return (
    <div className="Page">
      <div className="container"></div>
      <div className="aboutWords">
        <h1>Sydney Meza</h1>
        <div className="funfacts">
          <p className="funFact"> Loves to sew</p>
          <p className="funFact">hiking!</p>
          <p className="funFact">from utah :/</p>
        </div>
        <div className="actualBio">
            <p>this is where her actual bio would be</p>
        </div>
      </div>
    </div>
  );
};

export default About;
