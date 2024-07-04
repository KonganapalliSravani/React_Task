import React, { useState } from "react";
import "./RecentStudies.css";

const initialStudies = [
  { id: 1, title: "Dog Bite Complaint", status: "completed" },
  { id: 2, title: "The Cyberbullying Conspiracy", status: "completed" },
  { id: 3, title: "The Data Breach Dilemma", status: "completed" },
  { id: 4, title: "The Data Breach Dilemma", status: "in-progress" },
  { id: 5, title: "The Data Breach Dilemma", status: "failed" },
];

const RecentStudies = () => {
  const [studies, setStudies] = useState(initialStudies);

  const updateStatus = (id, status) => {
    setStudies(
      studies.map((study) => (study.id === id ? { ...study, status } : study))
    );
  };

  return (
    <div className="recent-studies">
      <h3>Recent Studies</h3>
      <ul>
        {studies.map((study) => (
          <li key={study.id} className={study.status}>
            <span>{study.title}</span>
            <div className="status-buttons">
              <button
                onClick={() => updateStatus(study.id, "completed")}
                className={`status-button ${
                  study.status === "completed" ? "active" : ""
                }`}
              >
                Completed
              </button>
              <button
                onClick={() => updateStatus(study.id, "in-progress")}
                className={`status-button ${
                  study.status === "in-progress" ? "active" : ""
                }`}
              >
                In Progress
              </button>
              <button
                onClick={() => updateStatus(study.id, "failed")}
                className={`status-button ${
                  study.status === "failed" ? "active" : ""
                }`}
              >
                Failed
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentStudies;
