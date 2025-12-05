import { Box, Container, Grid, Paper, Typography } from "@mui/material";
import JobHeader from "./ui/JobHeader";
import JobMeta from "./ui/JobMeta";
import ExperienceChart from "./ui/ExperianceChart";
import ProbabilityChart from "./ui/ProbablityChart";
import MissingSkills from "./ui/MissingSkills";
import { BarChart } from "@mui/x-charts";

export interface JobDetailsProps {
  job: {
    jobId: string;
    jobTitle: string;
    requiredSkills: string[];
    experienceRequirements: number;
    companyDetails: string;
    status: string;
    date: string;
    url: string;
    userId: string;
    skillMatch: number;
    missingSkills: string[];
    experienceFitScore: number;
    overallFitScore: number;
    selectionProbability: number;
  };
}

export default function JobDetails({ job }: JobDetailsProps) {
  return (
    <Box sx={{ width: "100%", py: 3 }}>
      <Paper
        elevation={2}
        sx={{
          p: 3,
          borderRadius: 3,
          display: "flex",
          flexDirection: "column",
          gap: 3,
        }}
      >
        {/* Header */}
        <JobHeader
          title={job.jobTitle}
          company={job.companyDetails}
          status={job.status}
          url={job.url}
          date={job.date}
        />

        {/* Meta Info */}
        <JobMeta
          requiredSkills={job.requiredSkills}
          experience={job.experienceRequirements}
        />

        {/* Missing Skills */}
        <MissingSkills skills={job.missingSkills} />

        {/* Charts Row */}
        <Grid container spacing={3} sx={{ mt: 1 }}>
          <Grid  size={{xs:12, md:5}}>
            <ExperienceChart score={job.experienceFitScore} />
          </Grid>

          <Grid size={{xs:12, md:5}}>
            <ProbabilityChart score={job.selectionProbability} />
          </Grid>
        </Grid>

        {/* Bar Chart */}
        <Box sx={{ display: "flex", justifyContent: "flex-start", width: "fit-content", mt: 2 }}>
          <BarChart
            xAxis={[
              {
                data: ["Fit Score", "Skill Match"],
                scaleType: "band",
              },
            ]}
            series={[
              {
                data: [job.overallFitScore, job.skillMatch],
                label: "Percentage",
              },
            ]}
            height={300}
            yAxis={[{ max: 100 }]}
            margin={{ left: 0, right: 20, top: 20, bottom: 40 }}
            width={400}
          />
        </Box>
      </Paper>
    </Box>
  );
}
