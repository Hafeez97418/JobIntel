import { Box, Typography, Link, Chip } from "@mui/material";

interface JobHeaderProps {
  title: string;
  company: string;
  status: string;
  url: string;
  date: string;
}

export default function JobHeader({ title, company, status, url, date }: JobHeaderProps) {
  return (
    <Box sx={{ marginBottom: 2 }}>
      <Typography variant="h5" sx={{ fontWeight: 700 }}>
        {title}
      </Typography>

      <Typography variant="subtitle1" color="text.secondary">
        {company}
      </Typography>

      <Box sx={{ display: "flex", gap: 1, marginTop: 1 }}>
        <Chip label={status} color="primary" size="small" />
        <Chip label={new Date(date).toDateString()} size="small" />
      </Box>

      <Link
        href={url}
        target="_blank"
        rel="noopener"
        sx={{ display: "block", marginTop: 1 }}
      >
        View Job Posting
      </Link>
    </Box>
  );
}
