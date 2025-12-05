import { Box, Chip, Typography } from "@mui/material";

export default function MissingSkills({ skills }: { skills: string[] }) {
  if (skills.length === 0) return null;

  return (
    <Box sx={{ marginTop: 3 }}>
      <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
        Missing Skills
      </Typography>

      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, marginTop: 1 }}>
        {skills.map((s) => (
          <Chip key={s} label={s} size="small" color="warning" />
        ))}
      </Box>
    </Box>
  );
}
