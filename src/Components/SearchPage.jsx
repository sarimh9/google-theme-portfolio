import React from "react";
import { Link } from "react-router-dom";
import googleLogo from "../Assets/google-logo.png";
// import userLogo from "../Assets/user-logo.jpg";
import "../Styles/searchPage.css";
import SearchArea from "./SearchArea";

export default function SearchPage() {
  function handleClick() {
    document.title = "Sarim's Portfolio - Google Search";
  }
  return (
    <>
      <div className="search-page-parent">
        <div className="top-section">
          Gmail Images
          <svg className="dot-grid" focusable="false" viewBox="0 0 24 24">
            <path d="M6,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM16,6c0,1.1 0.9,2 2,2s2,-0.9 2,-2 -0.9,-2 -2,-2 -2,0.9 -2,2zM12,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2z"></path>
          </svg>
          {/* <img className="user-logo-style" src={userLogo} alt="user_logo" /> */}
          <button className="sign-in-btn">Sign in</button>
        </div>
        <div className="image">
          <img src={googleLogo} alt="logo" />
        </div>
        <div className="search-area">
          <SearchArea />
        </div>
        <div className="search-buttons">
          {/* <button className="search-button btn"> */}
          <Link
            className="search-button btn"
            to={"/portfolio"}
            onClick={handleClick}
          >
            Google Search
          </Link>
          {/* </button> */}
          <button className="feeling-lucky btn">I'm Feeling Lucky</button>
        </div>
        <div className="languages">
          <p>
            Google offered in:
            <span className="languages-text">
              हिन्दी বাংলা తెలుగు मराठी தமிழ் ગુજરાતી ಕನ್ನಡ മലയാളം ਪੰਜਾਬੀ
            </span>
          </p>
        </div>
        <footer>
          <div className="footer-one">India</div>
          <div className="footer-two">
            <div className="left-section">
              About Advertising Business How Search works
            </div>
            <div className="right-section">Privacy Terms Settings</div>
          </div>
        </footer>
      </div>
      <div className="not-available">
        <h1>Sorry, we are only available on laptop devices for now.</h1>
      </div>
    </>
  );
}
