import "./AIAnalytics.css";

function AIAnalytics() {
  return (
    <div className="analytics-page">

      {/* Header */}
      <h2>AI Analytics</h2>
      <p className="subtitle">
        Trends, patterns, and predictive insights across all reports
      </p>

      {/* Stats Cards */}
      <div className="stats-container">

        <div className="stat-card">
          <p>AI Accuracy</p>
          <h3>96.4%</h3>
          <span className="positive">+1.2% this week</span>
        </div>

        <div className="stat-card">
          <p>Flagged Correctly</p>
          <h3>142</h3>
          <span>Of 147 total flags</span>
        </div>

        <div className="stat-card">
          <p>Avg Confidence</p>
          <h3>89%</h3>
          <span>Across all analyses</span>
        </div>

        <div className="stat-card">
          <p>Reports This Month</p>
          <h3>318</h3>
          <span className="positive">+22 vs last month</span>
        </div>

      </div>

      {/* Charts Section */}
      <div className="charts-container">

        {/* Left - Abnormalities */}
        <div className="chart-box">
          <h4>MOST COMMON ABNORMALITIES</h4>

          <div className="bar-item">
            <span>High WBC</span>
            <div className="bar red" style={{ width: "80%" }}></div>
            <span>23%</span>
          </div>

          <div className="bar-item">
            <span>High LDL</span>
            <div className="bar orange" style={{ width: "65%" }}></div>
            <span>19%</span>
          </div>

          <div className="bar-item">
            <span>Low Hgb</span>
            <div className="bar blue" style={{ width: "50%" }}></div>
            <span>15%</span>
          </div>

          <div className="bar-item">
            <span>High TSH</span>
            <div className="bar green" style={{ width: "35%" }}></div>
            <span>10%</span>
          </div>

          <div className="bar-item">
            <span>High Creat.</span>
            <div className="bar gray" style={{ width: "20%" }}></div>
            <span>6%</span>
          </div>
        </div>

        {/* Right - Status */}
        <div className="chart-box">
          <h4>STATUS DISTRIBUTION (THIS MONTH)</h4>

          <div className="bar-item">
            <span>Normal</span>
            <div className="bar green" style={{ width: "75%" }}></div>
            <span>61%</span>
          </div>

          <div className="bar-item">
            <span>Borderline / Abnormal</span>
            <div className="bar orange" style={{ width: "40%" }}></div>
            <span>28%</span>
          </div>

          <div className="bar-item">
            <span>Critical</span>
            <div className="bar red" style={{ width: "20%" }}></div>
            <span>11%</span>
          </div>

        </div>

      </div>

    </div>
  );
}

export default AIAnalytics;