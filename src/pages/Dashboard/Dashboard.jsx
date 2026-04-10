import React from "react";
import "./Dashboard.css";
import { FaHeart, FaVial, FaFlask } from "react-icons/fa";
import { GiLungs } from "react-icons/gi";
import { MdBloodtype } from "react-icons/md";

const Dashboard = () => {
  return (
    <div className="dashboard">

      {/* Header */}
      <div className="header">
        <h2>Good morning, Dr. Rahman</h2>
        <p>Thursday, April 9, 2026 • 14 reports pending analysis</p>
      </div>

      {/* Stats */}
      <div className="stats">
        <div className="card">
          <p>Reports Today</p>
          <h3>24</h3>
          <span className="clear">+6 from yesterday</span>
        </div>

        <div className="card">
          <p>AI Analyzed</p>
          <h3>19</h3>
          <span className="clear">79% complete</span>
        </div>

        <div className="card">
          <p>Critical Flags</p>
          <h3 className="flag">3</h3>
          <span className="flag">Requires review</span>
        </div>

        <div className="card">
          <p>Avg Analysis Time</p>
          <h3>1.4s</h3>
          <span className="clear">-0.3s improvement</span>
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid">

        {/* LEFT */}
        <div className="left">

          <h4>Recent Reports</h4>

          <div className="report">
            <div className="icon red">
                <MdBloodtype />
            </div>
            <div>
              <p>Complete Blood Count — Ananya Shah</p>
              <span>Today, 9:14 AM • Hematology</span>
            </div>
            <span className="badge critical">Critical</span>
          </div>

          <div className="report">
            <div className="icon blue">
                <FaHeart />
            </div>
            <div>
              <p>ECG Analysis — Pradeep Iyer</p>
              <span>Today, 8:52 AM • Cardiology</span>
            </div>
            <span className="badge abnormal">Abnormal</span>
          </div>

          <div className="report">
            <div className="icon green">
                <GiLungs />
            </div>
            <div>
              <p>Chest X-Ray — Fatima Malik</p>
              <span>Today, 8:30 AM • Radiology</span>
            </div>
            <span className="badge normal">Normal</span>
          </div>

          <div className="report">
            <div className="icon yellow">
                <FaFlask />
            </div>
            <div>
              <p>Lipid Panel — Vikram Nair</p>
              <span>Yesterday • Biochemistry</span>
            </div>
            <span className="badge borderline">Borderline</span>
          </div>

          <div className="report">
            <div className="icon gray">
                <FaVial />
            </div>
            <div>
              <p>Thyroid Function — Deepa Rao</p>
              <span>Yesterday • Endocrinology</span>
            </div>
            <span className="badge normal">Normal</span>
          </div>

        </div>

        {/* RIGHT */}
        <div className="right">

          <h4>Reports by Department</h4>

          <div className="bar">
            <span>Hematology</span>
            <div className="progress">
              <div className="fill green" style={{ width: "90%" }}></div>
            </div>
            <span>9</span>
          </div>

          <div className="bar">
            <span>Cardiology</span>
            <div className="progress">
              <div className="fill blue" style={{ width: "70%" }}></div>
            </div>
            <span>7</span>
          </div>

          <div className="bar">
            <span>Radiology</span>
            <div className="progress">
              <div className="fill yellow" style={{ width: "50%" }}></div>
            </div>
            <span>5</span>
          </div>

          <div className="bar">
            <span>Biochem</span>
            <div className="progress">
              <div className="fill red" style={{ width: "30%" }}></div>
            </div>
            <span>3</span>
          </div>

          {/* Activity */}
          <h4 className="activity-title">Recent Activity</h4>

          <ul className="activity">
            <li> CBC flagged high WBC for Ananya Shah</li>
            <li> ECG anomaly detected — ST segment irregular</li>
            <li> Chest X-Ray cleared for Fatima Malik</li>
            <li> 3 new reports uploaded by lab</li>
          </ul>

        </div>

      </div>
    </div>
  );
};

export default Dashboard;