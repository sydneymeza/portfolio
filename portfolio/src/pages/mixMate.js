import React from "react";
import { NavLink } from "react-router-dom";

const MixMate = () => {
  return (
    <div className="Page" id="caseStudy">
      <div className="workLanding">
        <h1 className="top">Mix Mate</h1>
      </div>
      <h1 className="studyTitle">Mix Mate</h1>
      <hr style={{ width: "84vw", margin: "auto" }} />
      <h3 className="studyText">Project Focus: Frontend Development</h3>
      <h3 className="studyText">Tools: React/JS, CSS, Figma </h3>
      <h2 className="studySection">Overview</h2>
      <hr style={{ width: "76vw", margin: "auto" }} />
      <p className="studyText">
        This project is about learning how to use React, and also developing
        skills to analyze different websites to decided what features would be
        beneficial to add to a new app.{" "}
      </p>
      <h2 className="studySection">Research</h2>
      <hr style={{ width: "76vw", margin: "auto" }} />
      <p className="studyText">
        For this project I first started by researching and analyzing different
        websites that use likes and filters to go through a list of items. I
        then did a competitive comparison of them.
      </p>
      {/* insert table photo */}
      <p className="studyText">
        Each website had very different ways to filter and sort through their
        items. The favoriting functions are also different. While Spotify and
        Apply Music all store the favorited songs in a playlist that is
        accessible without filtering, Ed Stem only allows users to filter out
        any posts that are favorited.
        <br />
        From these websites, I chose to include features that made the filtering
        and sorting options very visible and intuitive. I also included the
        functionality to combine these so that users can have a less frustrating
        experience searching for a song.
        <br />I also decided to implement the design of changing the button
        whether the post or the item, was favorited or not. Thus letting the
        user know that it was added and that it can be removed with the same
        button.
      </p>
      <h2 className="studySection">Process</h2>
      <hr style={{ width: "76vw", margin: "auto" }} />
      <p className="studyText">
        Since I knew the theme of the website would be around music and adding
        or seeing all the favorite songs. I ultimately decided for the
        aggregator to be an add-to the current playlist, as this would allow for
        multiple iterations of different combinations of music, and someone
        could reset the playlist to make a new one very easily. From there I
        drew the following sketches which resulted in the final sketch
      </p>
      {/* insert sketch */}

      <p className="studyText">I then created a Lofi wire frame on Figma.</p>
      {/* inisert lofi */}
      <p className="studyText">
        To help the high-fidelity prototype come along much easier, I created
        this style guide to help know what colors to use and which fonts to use.
      </p>
      {/* inisert lofi */}
      <p className="studyText">
        After creating the style guide and the Lofi wireframe, the high-fidelity
        prototype in Figma looks like this.
      </p>
      {/* inisert lofi */}
      <p className="studyText">
        While creating the mockup it was important to think about the different
        components that would be needed as I would be using React to create this
        website. Since there were a few moving parts, I decided to make a
        component for the card itself, a component to hold all the cards and the
        aggregators, and then a separate component for where each song would be
        stored and shown to the user.
      </p>

      <h2 className="studySection">Solution</h2>
      <hr style={{ width: "76vw", margin: "auto" }} />
      <p className="studyText">
        The current site, which can be viewed here is ultimately what I was able
        to create. There is a limited amount of songs, as I had to transfer data
        for each one by hand, but I think that I did a pretty good job at using
        React. There is definitely room for improvement, but this was a good
        headstart for me. I was able to get the simple job of adding a card to a
        different component and removing it, but I definitely need to work on
        figuring out aggregators and how those components interact with each
        other.
      </p>
      <h2 className="studySection">Key Takeaways</h2>
      <hr style={{ width: "76vw", margin: "auto" }} />
      <p className="studyText">
        To create an app that would truly be able to keep up with competitors,
        there needs to be some sort of analysis to see if there’s anything new
        to be offered, or if there are parts of each that can be taken to offer
        something different, or something that customers don’t have to choose
        between I also learned that using React is much harder than I thought it
        would be. I didn’t expect using React to be particularly easy, but I
        didn’t expect it to be as hard as it was for me to learn. It will
        definitely take me some time to learn all the ins and outs of how React
        works, but I know that through this project I have learned a lot more
        and I hope that it has made me a better front-end developer.
      </p>
      <div className="buttons">
        <NavLink className="caseButton" to="/menomineeRedesign">
          {`<`}- Menominee Redesign
        </NavLink>
        <NavLink className="caseButton" to="/warpHome">
          Warp Home -{`>`}
        </NavLink>
      </div>
    </div>
  );
};

export default MixMate;
