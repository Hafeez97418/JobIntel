import { PieChart } from "@mui/x-charts/PieChart";
import { Box, Typography } from "@mui/material";

export default function SkillMatchChart({ score }: { score: number }) {
  const value = Math.min(Math.max(score, 0), 100);

  return (
    <Box sx={{ textAlign: "center" }}>
      <Typography variant="subtitle1" sx={{ fontWeight: 600, marginBottom: 1 }}>
        Skill Match
      </Typography>

      <PieChart
        width={200}
        height={200}
        series={[
          {
            outerRadius: 80,
            innerRadius: 60,
            data: [
              { id: 0, value, label: "Match" },
              { id: 1, value: 100 - value, label: "" }
            ]
          }
        ]}
      />

      <Typography variant="h6" sx={{ marginTop: -6, fontWeight: 700 }}>
        {value}%
      </Typography>
    </Box>
  );
}
