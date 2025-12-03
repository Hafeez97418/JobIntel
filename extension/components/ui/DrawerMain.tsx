import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { AppRegistration, Cases, HomeFilled, LoginSharp, SettingsVoiceOutlined } from '@mui/icons-material';
import { Link } from 'react-router-dom';

export default function DrawerMain(props: { open: boolean; onClose: () => void }) {
  const { open, onClose } = props;
  type Page = { name: string, url: string, icon: any }
  const pageList = [
    {
      name: "Home",
      url: "/",
      icon: <HomeFilled />,
    },
    {
      name: "Login",
      url: "/login",
      icon: <LoginSharp/>
    },
    {
      name: "Register",
      url: "/register",
      icon: <AppRegistration/>,
    },
    {
      name: "Jobs",
      url: "/jobs",
      icon: <Cases/>
    }
  ]
  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <Box sx={{ width: 250 }} role="presentation" onClick={onClose}>
        <List>
          {pageList.map((page: Page) => (
            <ListItem key={page.name} disablePadding sx={{backgroundColor:window.location.hash==`#${page.url}`?"lightcyan":"inherit"}}>
              <Link to={page.url} style={{width:"100%", textDecoration:"none", color:"black"}}>
                <ListItemButton>
                  <ListItemIcon>
                    {page.icon}
                  </ListItemIcon>
                  <ListItemText primary={page.name} />
                </ListItemButton>
              </Link>
            </ListItem>
          ))}
        </List>
        <Divider />
      </Box>
    </Drawer>
  );
}
