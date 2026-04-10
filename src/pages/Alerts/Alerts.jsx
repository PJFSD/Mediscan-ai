import React from "react";
import "./Alerts.css";

const alertsData = [
  {
    type: "critical",
    title: "WBC 14.2 × 10³/µL — Ananya Shah (CBC)",
    subtitle: "Hematology • Possible infection or inflammatory condition",
    time: "Today, 9:14 AM",
    action: "Review",
  },
  {
    type: "abnormal",
    title: "ST-segment irregularity — Pradeep Iyer (ECG)",
    subtitle: "Cardiology • Possible ischemic pattern",
    time: "Today, 8:52 AM",
    action: "Review",
  },
  {
    type: "borderline",
    title: "LDL 138 mg/dL — Vikram Nair (Lipid Panel)",
    subtitle: "Biochemistry • Above optimal, monitor diet",
    time: "Today",
    action: "Review",
  },
  {
    type: "borderline",
    title: "Low Hemoglobin 10.8 g/dL — Ananya Shah",
    subtitle: "May indicate mild anemia",
    time: "Today, 9:14 AM",
    action: "Review",
  },
  {
    type: "followup",
    title: "Thyroid panel repeat — Deepa Rao",
    subtitle: "Endocrinology",
    time: "Scheduled: April 15, 2026",
    action: "Schedule",
  },
];

const Alerts = () => {
  return (
    <div className="alerts-container">
      <h2 className="alerts-title">Alerts</h2>
      <p className="alerts-subtitle">
        5 active alerts requiring clinical attention
      </p>

      <div className="alerts-list">
        {alertsData.map((alert, index) => (
          <div className="alert-item" key={index}>
            <div className="alert-left">
              <span className={`dot ${alert.type}`}></span>

              <div>
                <p className="alert-title">{alert.title}</p>
                <p className="alert-time">{alert.time}</p>
                <p className="alert-sub">{alert.subtitle}</p>
              </div>
            </div>

            <div className="alert-action">
              <button className="btn">{alert.action}</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Alerts;