import {
  Box,
  Card,
  CardActions,
  Chip,
  Divider,
  IconButton,
  List,
  ListItem,
  Typography
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { FC } from "react";
import { Link } from "react-router-dom";

export interface Job {
  jobId: string;
  jobTitle: string;
  requiredSkills: string[];
  experienceRequirements: number;
  companyDetails: string;
  status: string;
  date: string;
  url: string;
  skillMatch: number;
  missingSkills: string[];
  experienceFitScore: number;
  overallFitScore: number;
  selectionProbability: number;
}

interface JobsListProps {
  jobs: Job[];
  onDelete: (id: string) => void;
  onOpen?: (job: Job) => void;
}

const JobsList: FC<JobsListProps> = ({ jobs, onDelete, onOpen }) => {
  return (
    <Box sx={{ width: "100%" }}>
      <List sx={{ width: "100%", padding: 0 }}>
        {jobs.map(job => (
          <Card
            key={job.jobId}
            sx={{
              mb: 2,
              borderRadius: 2,
              background: "#fafafa",
              boxShadow: "0px 3px 10px rgba(0,0,0,0.07)"
            }}
          >
            <ListItem
              sx={{
                cursor: "pointer",
                display: "flex",
                alignItems: "flex-start"
              }}
              onClick={() => onOpen && onOpen(job)}
            >
              <Box sx={{ flexGrow: 1 }}>
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                  {job.jobTitle}
                </Typography>

                <Typography
                  variant="body2"
                  sx={{ mt: 1 }}
                  color="text.secondary"
                >
                  {job.companyDetails}
                </Typography>

                <Typography variant="body2" sx={{ mt: 0.5 }}>
                  Experience: {job.experienceRequirements} years
                </Typography>

                {/* Skills section (safe layout) */}
                <Box
                  sx={{
                    mt: 1,
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 1
                  }}
                >
                  {job.requiredSkills.slice(0, 5).map(skill => (
                    <Chip
                      key={skill}
                      label={skill}
                      size="small"
                      sx={{ background: "white", border: "1px solid #ddd" }}
                    />
                  ))}
                </Box>

                <Typography variant="caption" sx={{ display: "block", mt: 1 }}>
                  Fit Score: {job.overallFitScore.toFixed(2)} | Probability:{" "}
                  {(job.selectionProbability * 100).toFixed(1)}%
                </Typography>
              </Box>

              <IconButton
                onClick={event => {
                  event.stopPropagation();
                  onDelete(job.jobId);
                }}
              >
                <DeleteIcon color="error" />
              </IconButton>
            </ListItem>

            <Divider />

            <CardActions sx={{ px: 2, pb: 1 }}>
              <Link to={`/jobs/${job.jobId}`} style={{textDecoration:"none"}}>
                <Typography
                  variant="body2"
                  color="primary"
                  sx={{ cursor: "pointer" }}
                >
                  view
                </Typography>
              </Link>
              <Box sx={{ flexGrow: 1 }} />

              <Typography variant="caption" color="text.secondary">
                Analyzed: {new Date(job.date).toLocaleDateString()}
              </Typography>
            </CardActions>
          </Card>
        ))}
      </List>
    </Box>
  );
};

export default JobsList;

