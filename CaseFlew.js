import React from "react";
import "./CaseFlow.css";

const CaseFlew = () => {
  return (
    <div className="case-flow-container">
      <h1 className="title">Case flow</h1>
      <p className="subtitle">Select the document for drafting</p>
      <div className="case-section">
        <h2 className="section-title">Pre litigation</h2>
        <ul className="document-list">
          <li className="document-item">
            <span className="document-icon">📄</span>
            <span className="document-text">Legal Notice</span>
            <p className="document-description">
              Notifies the opposing party of the dispute and demands resolution.
            </p>
          </li>
          <li className="document-item">
            <span className="document-icon">📄</span>
            <span className="document-text">Reply to Legal Notice</span>
            <p className="document-description">
              A response to a legal notice received from the opposing party.
            </p>
          </li>
        </ul>
      </div>
      <div className="case-section">
        <h2 className="section-title">Litigation</h2>
        <ul className="document-list">
          <li className="document-item">
            <span className="document-icon">📄</span>
            <span className="document-text">Plaint/Complaint</span>
            <p className="document-description">
              Initiates the lawsuit, detailing the plaintiff's claims.
            </p>
          </li>
          <li className="document-item">
            <span className="document-icon">📄</span>
            <span className="document-text">Vakalatnama</span>
            <p className="document-description">
              Authorizes a lawyer to represent the client in court.
            </p>
          </li>
          <li className="document-item">
            <span className="document-icon">📄</span>
            <span className="document-text">Written Statement/Answer</span>
            <p className="document-description">
              The defendant's formal response to the plaint.
            </p>
          </li>
          <li className="document-item">
            <span className="document-icon">📄</span>
            <span className="document-text">Reply to Written Statement</span>
            <p className="document-description">
              Addresses points raised in the defendant's written statement.
            </p>
          </li>
        </ul>
      </div>
      <div className="case-section">
        <h2 className="section-title">Interlocutory Applications</h2>
        <ul className="document-list">
          <li className="document-item">
            <span className="document-icon">📄</span>
            <span className="document-text">
              Application for Temporary Injunction
            </span>
            <p className="document-description">
              Seeks immediate court intervention to preserve status quo.
            </p>
          </li>
          <li className="document-item">
            <span className="document-icon">📄</span>
            <span className="document-text">
              Counter-Affidavit to Opposition's Application
            </span>
            <p className="document-description">
              Responds to interlocutory applications from the opposing party.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CaseFlew;
