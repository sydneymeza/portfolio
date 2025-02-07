import React from "react";
import { NavLink } from "react-router-dom";
import ControlledCarousel from "../components/ControlledCarousel";
import sketches from "../assets/warpSketches.json";
import firstLofi from "../assets/warpNewWireframes.json";
import styleGuide from "../assets/warpStyleGuide.json";
import firstHifi from "../assets/warpFirstHifi.json";
import secondHifi from "../assets/warpExtraCredit.json";


const BMP = () => {
  var sketchList = [];
  sketches.map(function (item) {
    sketchList.push({
      img: item.img,
      name: item.name,
    });
  });

  var lofiList = [];
  firstLofi.map(function (item) {
    lofiList.push({ img: item.img, name: item.name });
  });

  var firstHifiList = [];
  firstHifi.map(function (item) {
    firstHifiList.push({ img: item.img, name: item.name });
  });

  var styleList = [];
  styleGuide.map(function (item) {
    styleList.push({ img: item.img, name: item.name });
  });

  var secondHifiList = [];
  secondHifi.map(function (item) {
    secondHifiList.push({ img: item.img, name: item.name });
  });

  return (
    <div className="Page" id="caseStudy">
      <div className="workLanding">
        <h1 className="top">Brown Motion Pictures - Movie Website</h1>
      </div>
      <h1 className="studyTitle"> Movie Website</h1>
      <hr style={{ width: "84vw", margin: "auto" }} />
      <h3 className="studyText">Project Focus: UI/UX design</h3>
      <h3 className="studyText">Tools: Figma </h3>
      <h2 className="studySection">Overview</h2>
      <hr style={{ width: "76vw", margin: "auto" }} />
      <br />
      <p className="studyText">
        For this project, my team and I worked with Brown Motion Pictures to design and develop a website for their upcoming film.
        We received other websites as reference points as to what the client wanted and received feedback from the client for the wireframes. 
      </p>
      <h2 className="studySection">Context/Problem</h2>
      <hr style={{ width: "76vw", margin: "auto" }} />
      <br />
      <p className="studyText">
        To summarize the project brief, Warp does not have a centralized home
        page for users to view information about their files, team, usage,
        account, and learn more about Warp. Currently, a lot of this information
        is in the settings page, which makes it difficult to find.
      </p>
      <h2 className="studySection">Process</h2>
      <hr style={{ width: "76vw", margin: "auto" }} />
      <br />
      <p className="studyText">
        We first created sketches to explore different layouts for the screen
        and modules (components on the screen).
      </p>
      <br />
      <ControlledCarousel data={sketchList} />
      <br />
      <p className="studyText">
        We then created our first iteration wireframes. We combined most of our
        sketches and organized content using a sidebar as the navigation. We then
        opted to have the navigation elements at the bottom of the bar. 
        I was in charge of the new users' page, and organizing
        the information that would be unique to their page.
      </p>
      <p className="studyText">
        We presented our wireframes to the client. Some
        feedback received was
        <li>
          If a user is on multiple teams, then a UI may not be the best design
          choice
        </li>
        <li>
          It's unclear how to get from the current view to the terminal and how
          to get from the terminal
        </li>
        <li>
          It's unclear where an object would be added if a user clicked the plus
          sign
        </li>
        <li>
          The wire frame currenlty does not show how to mange member in the team
        </li>
        <li>
          It would be beneficial to show what happens when you open a folder
        </li>
        <li>
          People may want to have more control over how they see the items in
          their drive and what they see on the sidebar.{" "}
        </li>
      </p>
      <br />
      <ControlledCarousel data={lofiList} />
      <br />
      <p className="studyText">
        From the feedback we received, we only made slight changes to revise our wireframes. Here are the
        changes we made
        <li>Added more screens to show user interaction</li>
        <li>Removed the metrics from the left sidebar</li>
        <li>
          Added basic features, like trash and a search bar along with sorting,
          filtering, and two modes for viewing
        </li>
        <li>Extended the recent items beyond the page, to not confuse with</li>
        <li>Changed the toggle to a dropdown to accommodate more team </li>
        <li>
          Added a new tab to the top bar for the home page, replacing the drive
          tab since the drive is integrated into the home page
        </li>
      </p>
      <p className="studyText">
        Our team was created with a style guide for the website to best fit with the clients needs.      </p>
      <br />
      <ControlledCarousel data={styleList} />
      <br />

      <p className="studyText">
        Here are screenshots of the high fidelity prototype that we were able to
        show the Warp designers. They gave us wonderful feedback so we could go
        back and iterate one last time.{" "}
      </p>
      <br />
      <ControlledCarousel data={firstHifiList} />
      <br />

      
      <p className="studyText">
        Designing as a team and interacting with real clients in order to
        achieve a design goal. Overall, communication was a huge part of this
        process - both communication within our team and with the startup
        founders. From the very beginning, we prioritized understanding the
        needs and expectations of our client, and this involved active listening
        during meetings, thoughtful questions, and thorough documentation of
        their feedback and concerns.
      </p>
      <p className="studyText">
        One of the key challenges we faced was translating their vision into
        tangible designs. This required not only creative problem-solving but
        also a deep understanding of design principles and user experience
        considerations. We took their feedback and continuously iterated on our
        designs, constantly striving to align with their expectations while also
        incorporating our own expertise and insights.
      </p>

      <div className="buttons">
        <NavLink className="caseButton" to="/mixMate">
          {`<`}- Mix Mate
        </NavLink>
        <NavLink className="caseButton" to="/warpHome">
          Warp Home -{`>`}
        </NavLink>
      </div>
    </div>
  );
};

export default BMP;
