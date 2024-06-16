import {
  Avatar,
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import React from "react";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import DraftsIcon from "@mui/icons-material/Drafts";
import InboxIcon from "@mui/icons-material/Inbox";
const components = [
  {
    comp: <InboxIcon />,
    text: "Inbox",
  },
  {
    comp: <FlightTakeoffIcon />,
    text: "Flight",
  },
  {
    comp: <DraftsIcon />,
    text: "Draft",
  },
  {
    comp: <AccountCircleIcon />,
    text: "Profile",
  },
];

const SideBar = () => {
  return (
    <Box>
      <List>
        {components.map((i) => (
          <ListItem>
            <ListItemIcon>{i.comp}</ListItemIcon>
            <ListItemText primary={i.text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default SideBar;
