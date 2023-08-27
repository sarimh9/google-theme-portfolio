import React from "react";
import BottomSection from "./BottomSection";
import TopSection from "./TopSection";
// import "../Styles/PortfolioPage.css";

export default function PortfolioPage() {
  return (
    <div className="portfolio-page-parent">
      <TopSection />
      <BottomSection />
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
  );
}
