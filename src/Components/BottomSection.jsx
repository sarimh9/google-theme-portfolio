import React from "react";
import "../Styles/bottomSection.css";
import MainContent from "./MainContent";
import SideContent from "./SideContent";
import Spacer from "./Spacer.jsx";

export default function BottomSection() {
  return (
    <div className="bottom-section">
      <Spacer width={14} />
      <MainContent />
      <SideContent />
      {/* <Spacer width={1} /> */}
    </div>
  );
}
