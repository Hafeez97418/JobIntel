import { Box, Chip, Typography } from "@mui/material";

interface JobMetaProps {
  requiredSkills: string[];
  experience: number;
}

export default function JobMeta({ requiredSkills, experience }: JobMetaProps) {
  return (
    <Box sx={{ marginY: 2 }}>
      <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
        Required Skills
      </Typography>

      <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap", marginTop: 1 }}>
        {requiredSkills.map((s) => (
          <Chip key={s} size="small" label={s} variant="outlined" />
        ))}
      </Box>

      <Typography variant="subtitle2" sx={{ fontWeight: 600, marginTop: 2 }}>
        Experience Required: {experience} years
      </Typography>
    </Box>
  );
}
