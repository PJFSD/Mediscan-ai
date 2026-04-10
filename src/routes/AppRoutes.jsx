import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Dashboard from "../pages/Dashboard/Dashboard";
import ReportViewer from "../pages/ReportViewer/ReportViewer";
import UploadReport from "../pages/UploadReport/UploadReport";
import PatientRecords from "../pages/PatientRecords/PatientRecords";
import AIAnalytics from "../pages/AI analytics/AIAnalytics";
import Alerts from "../pages/Alerts/Alerts";

function AppRoutes() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/reports" element={<ReportViewer />} />
          <Route path="/upload" element={<UploadReport />} />
          <Route path="/patients" element={<PatientRecords />} />
          <Route path="/ai_analytics" element={<AIAnalytics />} />
          <Route path="/alerts" element={<Alerts />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

export default AppRoutes;