import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  TextField,
  MenuItem
} from "@mui/material";
import { JSX } from "@emotion/react/jsx-runtime";

// Types
type Qualification = "NONE" | "HIGHSCHOOL" | "BACHELORS" | "MASTERS" | "PHD";

type UserInfo = {
  userId: string;
  name: string;
  age: number;
  totalExperience: number;
  specialization: string;
  HighestQualification: Qualification;
  last_updated: Date;
};

export default function UserInfoManager(): JSX.Element {
  const [user, setUser] = useState<UserInfo>({
    userId: Math.random().toString(36).substring(2, 9),
    name: "",
    age: 0,
    totalExperience: 0,
    specialization: "",
    HighestQualification: "NONE",
    last_updated: new Date()
  });

  const QUALIFICATIONS: Qualification[] = [
    "NONE",
    "HIGHSCHOOL",
    "BACHELORS",
    "MASTERS",
    "PHD"
  ];

  return (
    <Box p={4}>
      <Card sx={{ maxWidth: 700, mb: 4, p: 2 }}>
        <CardContent>
          <Typography variant="h5" mb={2}>User Information</Typography>

          <Box display="grid" gap={2}>
            <TextField
              label="Name"
              value={user.name}
              onChange={(e) => setUser({ ...user, name: e.target.value })}
              fullWidth
            />

            <TextField
              label="Age"
              type="number"
              value={user.age}
              onChange={(e) => setUser({ ...user, age: parseInt(e.target.value) })}
              fullWidth
            />

            <TextField
              label="Total Experience (years)"
              type="number"
              value={user.totalExperience}
              onChange={(e) => setUser({ ...user, totalExperience: parseFloat(e.target.value) })}
              fullWidth
            />

            <TextField
              label="Specialization"
              value={user.specialization}
              onChange={(e) => setUser({ ...user, specialization: e.target.value })}
              fullWidth
            />

            <TextField
              label="Highest Qualification"
              select
              value={user.HighestQualification}
              onChange={(e) => setUser({ ...user, HighestQualification: e.target.value as Qualification })}
              fullWidth
            >
              {QUALIFICATIONS.map((q) => (
                <MenuItem key={q} value={q}>
                  {q}
                </MenuItem>
              ))}
            </TextField>

            <TextField
              label="Last Updated"
              type="date"
              value={user.last_updated.toISOString().split("T")[0]}
              onChange={(e) => setUser({ ...user, last_updated: new Date(e.target.value) })}
              fullWidth
            />
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}
