import { AppBar, Badge, Box, Grid, Toolbar, Typography } from "@mui/material";
import React from "react";
import MessageIcon from "@mui/icons-material/Message";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Person2Icon from "@mui/icons-material/Person2";

const Header = () => {
  return (
    <AppBar position="sticky">
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="h5" color="white">
          Tour
        </Typography>
        <Toolbar
          sx={{
            display: "flex",
            gap: 2,
          }}
        >
          <Badge badgeContent={2} color="secondary">
            <MessageIcon />
          </Badge>
          <Badge badgeContent={6} color="secondary">
            <NotificationsIcon />
          </Badge>
          <Person2Icon />
        </Toolbar>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
