// Filename - pages/about.js

import React from "react";

const About = () => {
  return (
    <div className="Page" id="about">
      <div className="about">
        <div className="aboutContainer">
          <img src={process.env.PUBLIC_URL + "/images/sydney.JPG"}></img>
        </div>
        <div className="aboutWords">
          <h1>Hello! I'm Sydney Meza</h1>
          <div className="funfacts">
            <p className="funFact"> I love sewing!</p>
            <p className="funFact">hiking!</p>
            <p className="funFact">and playing around on figma and adobe illustrator!! </p>
          </div>
          <div className="actualBio">
            <p>
              I'm a rising junior at Brown University completing an A.B. in
              Computer Science with a focus on design and a Sc.B in Design
              Engineering.
            </p>
            <p>
              My passions lie in UI/UX and frontend development. I want to explore and learn more about human centered design to create memorable experiences!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
