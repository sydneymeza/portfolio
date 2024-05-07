import React from "react";
import Landing from "../components/Landing";
import CaseStudyCard from "../components/CaseStudyCard"

const Home = () => {
  return (
    <div>
        <Landing/>
      <h1>sydney is ready to work</h1>

      <CaseStudyCard name={"Case Study #1"} caseStudy={"warpHome"} description={"this is the warp home"}/>
    </div>
  );
};

export default Home;
