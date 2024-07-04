import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./StepNavigation.css";

const StepNavigation = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);

  const handleStepClick = (step) => {
    setCurrentStep(step);
    if (step === 1) {
      navigate("/");
    } else if (step === 2) {
      navigate("/step-two");
    } else if (step === 3) {
      navigate("/step-three");
    }
  };

  return (
    <div className="step-navigation">
      <ul>
        <li
          className={currentStep >= 1 ? "active" : ""}
          onClick={() => handleStepClick(1)}
        >
          Start
        </li>
        <li
          className={currentStep >= 2 ? "active" : ""}
          onClick={() => handleStepClick(2)}
        >
          Continue
        </li>
        <li
          className={currentStep >= 3 ? "active" : ""}
          onClick={() => handleStepClick(3)}
        >
          Analysis
        </li>
        <li className={currentStep >= 4 ? "active" : ""}>
          Additional Documents
        </li>
        <li className={currentStep >= 5 ? "active" : ""}>Relief</li>
        <li className={currentStep >= 6 ? "active" : ""}>Suggestions</li>
        <li className={currentStep >= 7 ? "active" : ""}>First Draft</li>
        <li className={currentStep >= 8 ? "active" : ""}>Q&A</li>
        <li className={currentStep >= 9 ? "active" : ""}>Final Draft</li>
      </ul>
      <button
        className="continue-button"
        onClick={() => handleStepClick(currentStep + 1)}
        disabled={currentStep >= 9}
      >
        Continue
      </button>
    </div>
  );
};

export default StepNavigation;
