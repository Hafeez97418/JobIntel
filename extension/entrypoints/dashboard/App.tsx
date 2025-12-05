import "./app.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import { Home } from "@/components/Home";
import DenseAppBar from "@/components/ui/AppBar";
import JobsPage from "@/components/Jobs";

export const demoJob = {
  jobId: "JOB-12345",
  jobTitle: "Frontend Engineer – React & TypeScript",
  requiredSkills: [
    "React",
    "TypeScript",
    "Material UI",
    "REST APIs",
    "Git",
    "State Management",
  ],
  experienceRequirements: 2.5,
  companyDetails: "TechNova Solutions Pvt. Ltd – Bangalore, India",
  status: "ANALYZED",
  date: "2025-12-03T10:24:00Z",
  url: "https://www.linkedin.com/jobs/view/1234567890/",
  userId: "USER-98765",

  // Scoring
  skillMatch: 82.5,               // %
  missingSkills: ["Redux Toolkit", "Unit Testing"],
  experienceFitScore: 70.0,        // %
  overallFitScore: 78.3,           // %
  selectionProbability: 64.5        // %
};


export default function App() {
  return (
    <div className="dashboard">
      <HashRouter>
        <DenseAppBar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/jobs" element={<JobsPage />} />
          <Route path="/jobs/:id" element={<JobDetails job={demoJob}/>}/>
        </Routes>
      </HashRouter>
    </div>
  );
}
