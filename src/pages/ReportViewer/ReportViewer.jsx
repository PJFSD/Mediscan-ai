import React from "react";
import "./ReportViewer.css";

function ReportViewer() {
  return (
    <div className="report-container">

      {/* Header */}
      <div className="report-header">
        <div>
          <h2>Report Viewer</h2>
          <p>AI-powered analysis of medical reports with real-time insights</p>
        </div>

        <div className="header-actions">
          <span className="badge red">3 Critical</span>
          <span className="badge green">System Normal</span>
          <div className="avatar">DR</div>
        </div>
      </div>

      <div className="report-body">

        {/* LEFT SIDEBAR */}
        <div className="report-list">
          <h4>All Reports <span className="new">14 new</span></h4>

          <input placeholder="Search patient, test..." />

          <div className="report-item active">
            <h5>Complete Blood Count</h5>
            <p>Ananya Shah · Today · Critical</p>
          </div>

          <div className="report-item">
            <h5>ECG Analysis</h5>
            <p>Pradeep Iyer · Today · Abnormal</p>
          </div>

          <div className="report-item">
            <h5>Chest X-Ray</h5>
            <p>Fatima Malik · Today · Normal</p>
          </div>

          <div className="report-item">
            <h5>Lipid Panel</h5>
            <p>Vikram Nair · Yesterday · Borderline</p>
          </div>

          <div className="report-item">
            <h5>Thyroid Function (TSH)</h5>
            <p>Deepa Rao · Yesterday · Normal</p>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="report-content">

          {/* Title */}
          <div className="report-title">
            <h3>Complete Blood Count (CBC)</h3>
            <p>Ananya Shah, 34F · Lab ID: CBC-20260409-001 · Today, 9:14 AM</p>

            <div className="actions">
              <button className="download">Download PDF</button>
              <button className="share">Share</button>
            </div>
          </div>

          {/* AI SUMMARY */}
          <div className="ai-summary">
            <div className="ai-header">
              <span>🧠 AI Analysis Summary</span>
              <span className="critical">Critical Finding</span>
            </div>

            <p>
              WBC count is significantly elevated at 14.2 × 10³/µL (reference:
              4.5–11.0), suggesting possible bacterial infection or inflammatory
              response. Hemoglobin is mildly low at 10.8 g/dL. Recommend urgent
              clinical correlation and follow-up.
            </p>
          </div>

          {/* TABS */}
          <div className="tabs">
            <span className="active">Lab Results</span>
            <span>Vitals</span>
            <span>Risk Score</span>
          </div>

          {/* TABLE */}
          <table className="lab-table">
            <thead>
              <tr>
                <th>Parameter</th>
                <th>Value</th>
                <th>Reference</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>WBC</td>
                <td className="high">14.2 ×10³/µL</td>
                <td>4.5 – 11.0</td>
                <td><span className="badge red">High</span></td>
              </tr>

              <tr>
                <td>RBC</td>
                <td className="low">3.9 ×10⁶/µL</td>
                <td>4.2 – 5.4</td>
                <td><span className="badge orange">Low</span></td>
              </tr>

              <tr>
                <td>Hemoglobin</td>
                <td className="low">10.8 g/dL</td>
                <td>12 – 16</td>
                <td><span className="badge orange">Low</span></td>
              </tr>

              <tr>
                <td>Hematocrit</td>
                <td>36.5%</td>
                <td>36 – 48</td>
                <td><span className="badge green">Normal</span></td>
              </tr>

              <tr>
                <td>Platelets</td>
                <td>245 ×10³/µL</td>
                <td>150 – 400</td>
                <td><span className="badge green">Normal</span></td>
              </tr>
            </tbody>
          </table>

          {/* AI CHAT */}
          <div className="ai-chat">
            <p>Ask me anything about this report...</p>
            <div className="chat-box">
              <input placeholder="Ask AI about this report..." />
              <button>Ask AI →</button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default ReportViewer;