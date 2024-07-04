import React from "react";
import { useNavigate } from "react-router-dom";
import "./ThirdPage.css";
import CaseFlew from "./CaseFlew";
import RecentStudies from "./RecentStudies";
const ThirdPage = () => {
  const navigate = useNavigate();

  const handleContinue = () => {
    // Handle continue button click event here
    alert("Continue to next step");
  };

  return (
    <div className="third-page">
      <div className="side-panel">
        <button className="back-button" onClick={() => navigate("/")}>
          Back to home
        </button>
        <div className="given-information">
          <h4>Given Information</h4>
          <div className="search-info">
            <p>Your search</p>
            <p>Habeas Corpus</p>
          </div>
          <div className="recents">
            <h4>Recents</h4>
            <RecentStudies />
          </div>
        </div>
      </div>
      <CaseFlew />
      <div className="steps-panel">
        <h3>Steps</h3>
        <ul>
          <li>Start</li>
          <li>Continue</li>
          <li>Analysis</li>
          <li>Additional Documents</li>
          <li>Relief</li>
          <li>Suggestions</li>
          <li>First Draft</li>
          <li>Q&A</li>
          <li>Final Draft</li>
        </ul>
        <button className="continue-button" onClick={handleContinue}>
          Continue
        </button>
      </div>
    </div>
  );
};

export default ThirdPage;
