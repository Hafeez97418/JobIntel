import { Box, Card, CardContent, Typography } from "@mui/material";
import WorkOffIcon from "@mui/icons-material/WorkOff";

export default function EmptyStateNotLinkedIn() {
  return (
    <Card
      elevation={3}
      sx={{
        width: 280,
        textAlign: "center",
        borderRadius: 3,
        paddingY: 2,
        margin: "auto",
      }}
    >
      <CardContent>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mb: 1.5,
          }}
        >
          <WorkOffIcon sx={{ fontSize: 48, color: "text.secondary" }} />
        </Box>

        <Typography
          variant="subtitle1"
          sx={{ fontWeight: 600, mb: 0.5 }}
        >
          Unsupported Page
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
        >
          This is not a LinkedIn job posting page.  
          Navigate to an actual job listing to analyze details.
        </Typography>
      </CardContent>
    </Card>
  );
}
