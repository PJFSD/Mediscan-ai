import "./ReportItem.css";

function ReportItem({ title, status }) {
  return (
    <div className="report-item">
      <p>{title}</p>
      <span>{status}</span>
    </div>
  );
}

export default ReportItem;