import { Link } from "react-router-dom";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

interface Item {
  id: string;
  title: string;
  path: string;
}

const items: Item[] = [
  { id: "1", title: "Dashboard", path: "/dashboard" },
  { id: "2", title: "Settings", path: "/settings" },
  { id: "3", title: "Profile", path: "/profile" }
];

export default function JobsList() {
  return (
    <List sx={{ width: "100%", maxWidth: 360 }}>
      {items.map((item) => (
        <ListItem
          key={item.id}
          disablePadding
          sx={{
            transition: "background-color 0.2s",
            "&:hover": {
              backgroundColor: "#f5f5f5"
            }
          }}
        >
          <ListItemText
            primary={
              <Link
                to={item.path}
                style={{
                  textDecoration: "none",
                  color: "inherit",
                  fontSize: "1rem",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.textDecoration = "underline";
                  e.currentTarget.style.color = "#1976d2";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.textDecoration = "none";
                  e.currentTarget.style.color = "inherit";
                }}
              >
                {item.title}
              </Link>
            }
          />
        </ListItem>
      ))}
    </List>
  );
}
