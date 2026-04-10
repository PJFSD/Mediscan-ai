import { Link } from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <h2>MedScan AI</h2>
      <span>Medical Intelligence Platform</span>

      <nav>
        <h5>OVERVIEW</h5>
        <Link to="/">Dashboard</Link>
        <Link to="/reports">Report Viewer</Link>
        <h5>PATIENTS</h5>
        <Link to="/upload">Upload Report</Link>
        <Link to="/patients">Patient Records</Link>
        <h5>ANLYSIS</h5>
        <Link to="/ai_analytics">AI Analytics</Link>
        <Link to="/alerts">Alerts</Link>
        <h5>SETTINGS</h5>
        <Link to="preferences">Preferences</Link>
        <Link to="teamAccess">Team Access</Link>
      </nav>
    </div>
  );
}

export default Sidebar;