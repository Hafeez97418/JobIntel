import { Box, Typography, LinearProgress } from "@mui/material";

export default function ProbabilityChart({ score }: { score: number }) {
  const value = Math.min(Math.max(score, 0), 100);

  return (
    <Box>
      <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
        Selection Probability
      </Typography>

      <Box sx={{ marginTop: 1 }}>
        <LinearProgress
          variant="determinate"
          value={value}
          sx={{ height: 10, borderRadius: 2 }}
        />
      </Box>

      <Typography variant="body2" sx={{ marginTop: 1 }}>
        {value}% Chance
      </Typography>
    </Box>
  );
}
