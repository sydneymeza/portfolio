import React from "react";
import { NavLink } from "react-router-dom";
import ControlledCarousel from "../components/ControlledCarousel";
import researchPhotos from "../assets/menomineeResearchCarousel.json";
import lofiPhotos from "../assets/menomineeLofiCarousel.json";
import hifiPhotos from "../assets/menomineeHifiCarousel.json";

const MenomineeRedesign = () => {
  var researchList = [];
  researchPhotos.map(function (item) {
    researchList.push({
      img: item.img,
      name: item.name
    });
  });

  var lofiList = [];
  lofiPhotos.map(function (item) {
    lofiList.push({ img: item.img, name: item.name });
  });

  var hifiList = [];
  hifiPhotos.map(function (item) {
    hifiList.push({ img: item.img, name: item.name });
  });

  return (
    <div className="Page" id="caseStudy">
      <div className="workLanding">
        <h1 className="top">MenomineeRedesign</h1>
      </div>

      <div className="caseStudyWords">
        <h1 className="studyTitle">Menominee Redesign</h1>
        <hr style={{ width: "84vw", margin: "auto" }} />
        <br />
        <h3 className="studyText">Project Focus: UI/UX design</h3>
        <h3 className="studyText">Tools: HTML/CSS, Figma </h3>
        <h2 className="studySection">Overview</h2>
        <hr style={{ width: "76vw", margin: "auto" }} />
        <br />
        <p className="studyText">
          When browsing the internet there will be times when a user comes
          across a site where navigating it is not easy. To develop my skills as
          a designer, I found it important to redesign one of these websites to
          have it become more intuitive and easy to navigate. I practiced the
          design process for this project and coded a simple website to be
          responsive and accessible.
        </p>

        <h2 className="studySection">Context/Problem</h2>
        <hr style={{ width: "76vw", margin: "auto" }} />
        <br />
        <p className="studyText">
          The Menominee Indian tribe, while the information is up to date with
          current events, does not a responsive or super accessible website.
        </p>
        <br />
        <ControlledCarousel data={researchList} />
        <br />

        <p className="studyText">
          As I inspected the code I also noticed that there wasn’t an alt tag
          for any of the photos on the website, thus making it not very
          screenreader friendly. The website did use the correct HTML tags.
        </p>

        <h2 className="studySection">Research</h2>
        <hr style={{ width: "76vw", margin: "auto" }} />
        <br />
        <p className="studyText">
          In class, I learned about generally good and bad design practices. And
          why certain things are good. Like how a good designer would make a
          website responsive, or ensure that the colors contrast each other
          enough that it’s visually accessible. After seeing what the website
          currently looks like, these are the changes that I believe would make
          it better.
        </p>

        <h2 className="studySection">Process</h2>
        <hr style={{ width: "76vw", margin: "auto" }} />
        <br />
        <p className="studyText">
          I started off by quickly drawing nine sketches, all with different
          layouts. I then created one final sketch on which I could base the
          Lofi wireframes on . Nine quick sketches, then created one on which I
          would base the Lofi wireframe.
          <br />I created three Lofi wireframes within Figma to be for a laptop,
          tablet, and then a phone. For the laptop and tablet, it wasn’t hard to
          create a different layout for each, however, it did require a bit of
          thinking to create a layout for the phone screen. Created 3 Lofi
          wireframes to represent the three different sizes that I could design
          for.
          <br />
          <ControlledCarousel data={lofiList} />
          <br />
          It was a bit hard to create the style guide. I knew what color I
          wanted to use because I feel like they best represent the Menominee
          tribe, however, I didn’t know if the shades and hues i chose would
          have good contrast. By utilizing an online resource, I was able to
          choose different shades of colors to ensure that the color contrast
          would be better than the original sizes.
          <br />
          Hopefully, the colors I chose are accessible, and while they aren’t
          the original colors of the tribe, I hope they match well enough.
          <br />
          After creating the style guide, I was able to utilize the Lofi
          wireframes to create the three high-fidelity mockups within Figma.
        </p>
        <br />
        <ControlledCarousel data={hifiList} />
        <br />
        <h2 className="studySection">Solution</h2>
        <hr style={{ width: "76vw", margin: "auto" }} />
        <br />
        <p className="studyText">
          The current site, which can be viewed here is ultimately what I was
          able to create. The changes I was able to implement did mostly match
          up with the changes I wanted to make. There are a few things that I
          need to work on, but I was able to get most of the bigger problems out
          of the way. The site is responsive, and the color contrast is much
          better than it was before.
        </p>

        <h2 className="studySection">Key Takeaways</h2>
        <hr style={{ width: "76vw", margin: "auto" }} />
        <br />
        <p className="studyText">
          Designers should automatically think of designing a responsive website
          Colors may work well together but they won’t always be accessible or
          have the best color contrast for all people to see.
        </p>
      </div>
      <div className="buttons">
        <NavLink className="caseButton" to="/warpHome">
          {`<`}- Warp Home
        </NavLink>
        <NavLink className="caseButton" to="/mixMate">
          Mix Mate -{`>`}
        </NavLink>
      </div>
    </div>
  );
};

export default MenomineeRedesign;
