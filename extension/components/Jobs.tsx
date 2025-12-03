import { useState, useMemo } from "react";
import { Box,  TextField, Typography } from "@mui/material";
import JobsList, { Job } from "./ui/JobsList";

const JobsPage = () => {
  const [search, setSearch] = useState("");

  // Sample mock data. Replace with your API data.
  const [jobs, setJobs] = useState<Job[]>([
    {
      jobId: "101",
      jobTitle: "Frontend Developer",
      requiredSkills: ["React", "TypeScript", "UI/UX"],
      experienceRequirements: 2,
      companyDetails: "Example Corp",
      status: "Analyzed",
      date: new Date().toISOString(),
      url: "https://example.com",
      skillMatch: 0.8,
      missingSkills: ["Testing"],
      experienceFitScore: 0.9,
      overallFitScore: 0.82,
      selectionProbability: 0.65
    },
    {
      jobId: "102",
      jobTitle: "Backend Engineer",
      requiredSkills: ["Node.js", "Express", "MongoDB"],
      experienceRequirements: 3,
      companyDetails: "Tech Solutions",
      status: "Analyzed",
      date: new Date().toISOString(),
      url: "https://example.com/backend",
      skillMatch: 0.75,
      missingSkills: ["Redis"],
      experienceFitScore: 0.8,
      overallFitScore: 0.78,
      selectionProbability: 0.60
    }
  ]);

  const handleDelete = (jobId: string) => {
    setJobs(prev => prev.filter(job => job.jobId !== jobId));
  };

  const filteredJobs = useMemo(() => {
    const s = search.toLowerCase();
    return jobs.filter(job =>
      job.jobTitle.toLowerCase().includes(s) ||
      job.companyDetails.toLowerCase().includes(s) ||
      job.requiredSkills.some(skill => skill.toLowerCase().includes(s))
    );
  }, [search, jobs]);

  return (
    <Box sx={{ width: "100%", p: 2 }}>
      <Typography variant="h5" sx={{ fontWeight: 600, mb: 2 }}>
        Job Analysis History
      </Typography>

      <TextField
        fullWidth
        variant="outlined"
        placeholder="Search jobs by title, skills, or company"
        size="small"
        value={search}
        onChange={e => setSearch(e.target.value)}
        sx={{
          mb: 3,
          background: "white"
        }}
      />

      <JobsList jobs={filteredJobs} onDelete={handleDelete} />
    </Box>
  );
};

export default JobsPage;
