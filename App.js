import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import FileUpload from "./components/FileUpload";
import RecentStudies from "./components/RecentStudies";
import QuestionsPage from "./components/QuestionPage";
import ThirdPage from "./components/ThirdPage";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="app">
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              <div className="main-content">
                <RecentStudies />
                <div className="file-upload-section">
                  <h2>
                    Get Complete info about any case from AI-driven research
                    assistance
                  </h2>
                  <FileUpload />
                  <button
                    className="start-button"
                    onClick={() => (window.location.href = "/questions")}
                  >
                    Start
                  </button>
                </div>
              </div>
            }
          />
          <Route path="/questions" element={<QuestionsPage />} />
          <Route path="/third-page" element={<ThirdPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
