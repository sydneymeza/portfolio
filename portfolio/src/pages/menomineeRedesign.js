import React from "react";
import { NavLink } from "react-router-dom";

const MenomineeRedesign = () => {
  return (
    <div className="Page">
      <div className="workLanding">
        <h1 className="top">MenomineeRedesign</h1>
      </div>
      <h1 className="studyTitle">Menominee Redesign</h1>
      <hr style={{ width: "84vw" }} />

      <h2 className="studySection">Overview</h2>
      <hr style={{ width: "76vw" }} />
      <p>I chose to redesign the Menominee Indian Trib'es website </p>

      <h2 className="studySection">Context/Problem</h2>
      <hr style={{ width: "76vw" }} />
      <p>
        The current website had plenty of usability issues. Mainly the website
        was not responsive. If the webpage was viewed on a phone or if the
        browser was resized, text would overlap or a photo would block the
        entire page. The webiste was also not very screenreader friendly with no
        alt tags for the images, however there were correct HTML tags.{" "}
      </p>

      <h2 className="studySection">Research</h2>
      <hr style={{ width: "76vw" }} />
      <p>
        I first made note of most of the issues with the website, then started
        by visual redesigning the website.{" "}
      </p>

      <h2 className="studySection">Process</h2>
      <hr style={{ width: "76vw" }} />
      <p>
        To start the redesign process, I sketched 9 quick ideas, then created a
        final sketch from combining favorite elements from the previous nine
      </p>
      <p>
        I then created 3 different low fidelity wire frames on figma to
        represent what the webiste could look like in three different screen
        sizes, a typical desktop, a vertical Ipad, and a phone screen.{" "}
      </p>
      <p>A style guide was then created to somewhat math the colors that were on the original website. The changes are noticeable, but I hope that these new colors and style represent the tribe well. </p>
      <h2 className="studySection">Solution</h2>
      <hr style={{ width: "76vw" }} />
      <p>Linked here is the redesigned page. It has most of the elements from the style guide and the high fidelity </p>

      <h2 className="studySection">Key Takeaways</h2>
      <p>It's important to have accessible sites or sites that can be viewed in many different ways so that everyone can enjoy it. </p>

      <div className="buttons">
        <NavLink></NavLink>
      </div>
    </div>
  );
};

export default MenomineeRedesign;
