import "./UploadReport.css";

function UploadReport() {
  return (
    <div className="upload-page">
      
      <h2 className="page-title">Upload Medical Report</h2>
      <p className="subtitle">
        Upload reports for instant AI-powered analysis and flagging
      </p>

      <div className="form-container">

        <div className="form-section">
          <h3>PATIENT INFORMATION</h3>

          <div className="form-grid">
            <input type="text" placeholder="Full Name" />
            <input type="text" placeholder="Patient ID" />

            <input type="date" />
            <select>
              <option>Select Gender</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>

            <input type="text" placeholder="Contact Number" />
            <select>
              <option>Blood Group</option>
              <option>A+</option>
              <option>A-</option>
              <option>B+</option>
              <option>B-</option>
              <option>O+</option>
              <option>O-</option>
              <option>AB+</option>
              <option>AB-</option>
            </select>

            <input type="text" placeholder="Referring Doctor" />
          </div>
        </div>

        <div className="form-section">
          <h3>REPORT DETAILS</h3>

          <div className="form-grid">
            <select>
              <option>Report Type</option>
              <option>Complete Blood Count</option>
              <option>Lipid Panel</option>
              <option>Liver Function Test</option>
              <option>ECG / EKG</option>
              <option>Chest X-Ray</option>
              <option>MRI Scan</option>
              <option>CT Scan</option>
              <option>Thyroid Panel</option>
              <option>Urine Analysis </option>
              <option>Other </option>

            </select>

            <select>
              <option>Department</option>
              <option>Hematology</option>
              <option>Cardiology</option>
              <option>Radiology</option>
              <option>Biochemistry</option>
              <option>Endocrinology</option>
              <option>Nephrology</option>
            </select>

            <input type="date" />

            <select>
              <option>Priority</option>
              <option>Routine</option>
              <option>Urgent</option>
              <option>Stat</option>
            </select>

            <textarea placeholder="Clinical Notes"></textarea>
          </div>
        </div>

      </div>

      <div className="upload-box">
        <p>Drag & drop report file here</p>
        <span>or click to browse (PDF, PNG, JPG)</span>
      </div>

      <div className="actions">
        <button className="clear-btn">Clear Form</button>
        <button className="submit-btn">Analyze with AI</button>
      </div>

    </div>
  );
}

export default UploadReport;