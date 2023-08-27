import React from "react";
import Education from "./Education";
import MyAccordion from "./MyAccordion";
import googlePaginationLogo from "../Assets/google-footer.png";
import { ReactComponent as SearchSVG } from "../Assets/searchicon.svg";

export default function MainContent() {
  let mastersDetails = {
    degreeTitle: "Master in Computer Science and Applications",
    desc: `MCA is a three year (6 semester) course. The students entering MCA
must have a B.C.A. / B.Sc. / B.Com / B.A. degree with Mathematics as
one of the subjects at 10+2 level or at graduation. From 6 semesters
one semester is to be spent in an industry developing a software
system.`,
    date: "August 2020 - June 2023",
  };
  let graduationDetails = {
    degreeTitle: "B.Sc. (Hons.) Computer Applications",
    desc: `B.Sc. Computer Applications is a 3-year full-time undergraduate degree program dealing with the study related to the various aspects of computer functioning. During this course study, the students can get in-depth knowledge on Windows, Programming Languages, Operating System, Web Designing and more.`,
    date: "August 2017 - June 2020",
  };

  return (
    <div className="main-content">
      <div className="results-size">About 1,91,000 results (0.41 seconds) </div>
      <div className="did-you-mean">
        <span className="did-you-mean-text">Did you mean:</span>
        <span className="my-name">
          <i> Sarim Hussain</i>
        </span>
      </div>
      <Education details={mastersDetails} />
      <Education details={graduationDetails} />
      <div className="accordion">
        <h2 className="sub-heading">
          Projects &emsp;<b className="threedots">⋮</b>
        </h2>
        <div className="myaccordion">
          <MyAccordion />
        </div>
      </div>
      <h2 className="sub-heading">
        Related Skills &emsp;<b className="threedots">⋮</b>
      </h2>
      <br />
      <div className="related-searches-box">
        <div className="related-searches-box-item">
          <SearchSVG /> Java
        </div>
        <div className="related-searches-box-item">
          <SearchSVG /> Data Structures & Algorithms
        </div>
        <div className="related-searches-box-item">
          <SearchSVG /> JavaScript
        </div>
        <div className="related-searches-box-item">
          <SearchSVG /> Web Development
        </div>
        <div className="related-searches-box-item">
          <SearchSVG /> ReactJS
        </div>
        <div className="related-searches-box-item">
          <SearchSVG /> SQL
        </div>
        <div className="related-searches-box-item">
          <SearchSVG /> Problem Solving
        </div>
        <div className="related-searches-box-item">
          <SearchSVG /> Git and Github
        </div>
      </div>
      <div className="google-pagination-logo">
        <img src={googlePaginationLogo} alt="pagination" />
      </div>
    </div>
  );
}
