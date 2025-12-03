import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import DrawerMain from './DrawerMain';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

export default function DenseAppBar() {
    const [open, setOpen] = React.useState(false);

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ paddingY: 1.2 }}>
                <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                            onClick={() => setOpen(true)}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" color="inherit" component="div">
                            Dashboard
                        </Typography>
                    </Box>
                    <Link to={"/jobs"} style={{textDecoration:"none", color:"white"}}><Button variant='outlined' color='inherit'>Review Jobs</Button></Link>
                </Toolbar>
            </AppBar>

            <DrawerMain open={open} onClose={() => setOpen(false)} />
        </Box>
    );
}
