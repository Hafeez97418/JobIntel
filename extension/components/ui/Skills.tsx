import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  MenuItem,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import { JSX } from "@emotion/react/jsx-runtime";

// Types
type Level = "BEGINNER" | "INTERMEDIATE" | "ADVANCED" | "EXPERT";

type Skill = {
  skill_Id: string;
  userId: string | null;
  CertificationId: string | null;
  skillName: string;
  experiance: number;
  level: Level;
};

const LEVELS: Level[] = ["BEGINNER", "INTERMEDIATE", "ADVANCED", "EXPERT"];

export default function SkillsManager(): JSX.Element {
  const [skills, setSkills] = useState<Skill[]>([]);
  const [open, setOpen] = useState<boolean>(false);
  const [form, setForm] = useState<Skill>({
    skill_Id: "",
    userId: null,
    CertificationId: null,
    skillName: "",
    experiance: 0,
    level: "BEGINNER",
  });

  const handleOpen = (skill: Skill | null): void => {
    if (skill) setForm(skill);
    else
      setForm({
        skill_Id: Math.random().toString(36).substring(2, 9),
        userId: null,
        CertificationId: null,
        skillName: "",
        experiance: 0,
        level: "BEGINNER",
      });
    setOpen(true);
  };

  const handleClose = (): void => setOpen(false);

  const handleSave = (): void => {
    const exists = skills.some((s) => s.skill_Id === form.skill_Id);
    if (exists) setSkills(skills.map((s) => (s.skill_Id === form.skill_Id ? form : s)));
    else setSkills([...skills, form]);

    setOpen(false);
  };

  const handleDelete = (id: string): void => {
    setSkills(skills.filter((s) => s.skill_Id !== id));
  };

  return (
    <Box p={4}>
      <Card sx={{ maxWidth: 900, mb: 4, p: 2 }}>
        <CardContent>
          <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
            <Typography variant="h5">Skills</Typography>
            <Button variant="contained" startIcon={<AddIcon />} onClick={() => handleOpen(null)}>
              Add Skill
            </Button>
          </Box>

          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Skill Name</TableCell>
                  <TableCell>Experience (yrs)</TableCell>
                  <TableCell>Level</TableCell>
                  <TableCell align="right">Actions</TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {skills.map((skill: Skill) => (
                  <TableRow key={skill.skill_Id}>
                    <TableCell>{skill.skillName}</TableCell>
                    <TableCell>{skill.experiance}</TableCell>
                    <TableCell>{skill.level}</TableCell>
                    <TableCell align="right">
                      <IconButton onClick={() => handleOpen(skill)}>
                        <EditIcon />
                      </IconButton>
                      <IconButton onClick={() => handleDelete(skill.skill_Id)} color="error">
                        <DeleteIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>

      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
        <DialogTitle>{form.skill_Id ? "Edit Skill" : "Add Skill"}</DialogTitle>
        <DialogContent>
          <Box display="grid" gap={2} mt={1}>
            <TextField
              label="Skill Name"
              value={form.skillName}
              onChange={(e) => setForm({ ...form, skillName: e.target.value })}
              fullWidth
            />

            <TextField
              label="Experience (years)"
              type="number"
              value={form.experiance}
              onChange={(e) => setForm({ ...form, experiance: parseFloat(e.target.value) })}
              fullWidth
            />

            <TextField
              label="Level"
              select
              value={form.level}
              onChange={(e) => setForm({ ...form, level: e.target.value as Level })}
              fullWidth
            >
              {LEVELS.map((lvl) => (
                <MenuItem key={lvl} value={lvl}>
                  {lvl}
                </MenuItem>
              ))}
            </TextField>
          </Box>
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button variant="contained" onClick={handleSave}>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}