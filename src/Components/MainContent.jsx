import React from "react";
import MyAccordion from "./MyAccordion";

export default function MainContent() {
  return (
    <div className="main-content">
      <div className="results-size">About 1,91,000 results (0.41 seconds) </div>
      <div className="did-you-mean">
        <span className="did-you-mean-text">Did you mean:</span>
        <span className="my-name">
          <i> Sarim Hussain</i>
        </span>
      </div>
      <div className="accordion">
        <h2>Projects :</h2>
        <MyAccordion />
      </div>
    </div>
  );
}
