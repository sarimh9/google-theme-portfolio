import React from "react";
import likedinLogo from "../Assets/linkedinlogo.png";
import stackoverflowLogo from "../Assets/stackoverflowlogo.png";
import githubLogo from "../Assets/githublogo.png";
import { ReactComponent as SearchSVG } from "../Assets/searchicon.svg";

export default function SideContent() {
  return (
    <div className="side-content">
      <h4>About</h4>
      <p>
        A professional who possesses good technical skills, problem-solving
        abilities, and a passion for technology. I am adept at developing
        software applications using programming languages, frameworks, and
        tools.
        <br /> I am also a team player, collaborating with others to achieve
        project goals. I believe in constant learning in order to update my
        skills and knowledge to stay current with the latest trends and
        technologies in the field.
      </p>
      <div className="horizontal-line"></div>
      <div className="details">
        <span className="bold">Email: </span> sarimh9@gmail.com <br />
        <br />
        <span className="bold">Phone: </span> +91 7417860932 <br />
        <br />
        <span className="bold">Location: </span> Meerut City, India
      </div>
      <div className="horizontal-line"></div>
      <br />
      <h4>Profiles</h4>
      <div className="profiles">
        <div className="github profile">
          <img src={githubLogo} alt="github_logo" /> Github
        </div>
        <div className="linkedin profile">
          <img src={likedinLogo} alt="linkedin_logo" /> LinkedIn
        </div>
        <div className="stackoverflow profile">
          <img src={stackoverflowLogo} alt="stackoverlfow_logo" /> StackOverflow
        </div>
      </div>
      <div className="horizontal-line"></div>
      <br />
      <h4>Similar searches</h4>
      <br />
      <div className="similar-searches">
        <ul>
          <SearchSVG />
          &emsp; Profile of a hard-working person <br />
          <br />
          <SearchSVG />
          &emsp; Example of Dedication <br />
          <br />
          <SearchSVG />
          &emsp; Ambitious Person <br />
          <br />
          <SearchSVG />
          &emsp; Motivated Personalities
        </ul>
      </div>
    </div>
  );
}
