import React from "react";
import Landing from "../components/Landing";
import CaseStudyCard from "../components/CaseStudyCard";
import workData from "../assets/workData.json";

const Home = () => {
  return (
    <div className="Page" id="home">
      <Landing />
      <h1 id="work">Work</h1>
      <div className="caseStudies">
        {workData.map((study) => (
          <CaseStudyCard
            img={study.img}
            name={study.name}
            caseStudy={study.caseStudy}
            description={study.description}
            number={study.num}/>
        ))}
      </div>
      {/* <CaseStudyCard name={"Case Study #1"} caseStudy={"warpHome"} description={"this is the warp home"}/> */}
    </div>
  );
};

export default Home;

// props.songData.map(function (item) {
//   const words = item.artist.split(", ");
//   if (words.length > 1) {
//     const lastWord = words[words.length - 1];
//     artists.push(words[0]);
//     artists.push(lastWord);
//   } else {
//     artists.push(words[0]);
//   }
// });
