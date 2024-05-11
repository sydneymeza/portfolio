import React from "react";
import { NavLink } from "react-router-dom";

const WarpHome = () => {
  return (
    <div className="Page" id="caseStudy">
      <div className="workLanding">
        <h1 className="top">Warp Home</h1>
      </div>
      <h1 className="studyTitle"> Warp Home</h1>
      <hr style={{ width: "84vw", margin: "auto" }} />
      <h3 className="studyText">Project Focus: UI/UX design</h3>
      <h3 className="studyText">Tools: Figma </h3>
      <h2 className="studySection">Overview</h2>
      <hr style={{ width: "76vw", margin: "auto" }} />
      <p className="studyText">
        For this project, my team and I worked with the company Warp to design a
        home page based on their project brief. We received feedback on our
        wireframe from both students in our class and David, a Senior Product
        Designer at Warp, in order to improve our design.
      </p>
      <h2 className="studySection">Context/Problem</h2>
      <hr style={{ width: "76vw", margin: "auto" }} />
      <p className="studyText">
        To summarize the project brief, Wapr does not have a centralized home
        page for users to view information about their files, team, usage,
        account, and learn more about Warp. Currently, a lot of this information
        is in the settings page, which makes it difficult to find.
      </p>
      <h2 className="studySection">Process</h2>
      <hr style={{ width: "76vw", margin: "auto" }} />
      <p className="studyText">
        We first created sketches to explore different layouts for the screen
        and modules (components on the screen).
      </p>
      <br />
      <p className="studyText">
        We then created our first iteration wireframes. We combined most of our
        sketches and organized content using sidebars and a topbar. We then
        opted to create a left-side bar and added a welcoming header for a
        personal touch. I was in charge of the new users' page, and organizing
        the information that would be unique to their page.
      </p>
      <p className="studyText">
        We presented our wireframes using Loom which you can watch here. Some
        common feedback received was
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
      {/* insert new wireframes here */}
      <p className="studyText">
        From the feedback we received, we revised our wireframes. Here are the
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
        Our team was provided with a style guide from the Warp brand, however,
        we also created our own guidelines and additional items to match the
        design we created.
      </p>
      <br />
      {/* carousel of styleguide */}

      <p className="studyText">
        We also checked the Warp brand with the WCAG AA guidelines and found
        that the dark gray on black could be an issue for accessibility if using
        a dark gray font on the black. Because we only use white text, we did
        not change any colors from the Warp brand.
      </p>
      <br />

      <p className="studyText"></p>
      <br />
      {/* got feedback from warp designers */}

      <h2 className="studySection">Solution</h2>
      <hr style={{ width: "76vw", margin: "auto" }} />
      <p className="studyText">
        Our project focuses on depicting the design of the home page based on
        the user state and the various actions that they can take.
      </p>

      <p className="studyText">
        After our final feedback from the Warp designers here are the changes
        made
        <li>Switched the button popups on the team page to tabs</li>
        <li>
          Changed the function of the trash icon, so it’s integrated as a tab
        </li>
        <li>
          The order of content on the beginner page was changed so that the
          videos appeared at the top of the screen
        </li>
        <li>Labeled ‘Activity’ to ‘Recent Activity’</li>
      </p>

      {/* insert carousel of extra credit photos */}

      <h2 className="studySection">Key Takeaways</h2>
      <hr style={{ width: "76vw", margin: "auto" }} />
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
        <NavLink className="caseButton" to="/menomineeRedesign">
          Menominee Redesign -{`>`}
        </NavLink>
      </div>
    </div>
  );
};

export default WarpHome;
