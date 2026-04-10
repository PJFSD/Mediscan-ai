import "./PatientRecords.css";

function PatientRecords() {
  return (
    <div className="records-page">

      {/* Header */}
      <div className="records-header">
        <div>
          <h2>Patient Records</h2>
          <p>48 patients · Active medical history with AI tracking</p>
        </div>

        <button className="add-btn">+ Add Patient</button>
      </div>

      {/* Filters */}
      <div className="records-filters">
        <input
          type="text"
          placeholder="Search by name, ID, condition..."
        />

        <select>
          <option>All Departments</option>
          <option>Cardiology</option>
          <option>Radiology</option>
          <option>Hematology</option>
        </select>
      </div>

      {/* Table */}
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Patient</th>
              <th>Age/Gender</th>
              <th>Last Report</th>
              <th>Department</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>
                <strong>Ananya Shah</strong>
                <span>ID: P-00412</span>
              </td>
              <td>34F</td>
              <td>Today, 9:14 AM</td>
              <td>Hematology</td>
              <td><span className="status critical">Critical</span></td>
              <td className="action">View Report</td>
            </tr>

            <tr>
              <td>
                <strong>Pradeep Iyer</strong>
                <span>ID: P-00391</span>
              </td>
              <td>58M</td>
              <td>Today, 8:52 AM</td>
              <td>Cardiology</td>
              <td><span className="status abnormal">Abnormal</span></td>
              <td className="action">View Report</td>
            </tr>

            <tr>
              <td>
                <strong>Fatima Malik</strong>
                <span>ID: P-00387</span>
              </td>
              <td>45F</td>
              <td>Today, 8:30 AM</td>
              <td>Radiology</td>
              <td><span className="status normal">Normal</span></td>
              <td className="action">View Report</td>
            </tr>

            <tr>
              <td>
                <strong>Vikram Nair</strong>
                <span>ID: P-00380</span>
              </td>
              <td>52M</td>
              <td>Yesterday</td>
              <td>Biochemistry</td>
              <td><span className="status borderline">Borderline</span></td>
              <td className="action">View Report</td>
            </tr>

            <tr>
              <td>
                <strong>Deepa Rao</strong>
                <span>ID: P-00374</span>
              </td>
              <td>38F</td>
              <td>Yesterday</td>
              <td>Endocrinology</td>
              <td><span className="status normal">Normal</span></td>
              <td className="action">View Report</td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  );
}

export default PatientRecords;