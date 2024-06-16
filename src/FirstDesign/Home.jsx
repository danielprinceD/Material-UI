import { Button, Grid, Stack, ThemeProvider, createTheme } from "@mui/material";
import React, { useState } from "react";
import Header from "./Header";
import SideBar from "./SideBar";
import Main from "./Main";
import PhotoGallery from "./PhotoGallery";

const Home = () => {
  const [theme, setTheme] = useState("dark");
  const myTheme = createTheme({
    palette: {
      mode: theme === "light" ? "dark" : "light",
    },
  });

  return (
    <ThemeProvider theme={myTheme}>
      <Button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        {theme}
      </Button>
      <Stack
        direction={"column"}
        bgcolor="background.default"
        color={"text.primary"}
      >
        <Header />
        <Grid
          container
          spacing={2}
          paddingTop={3}
          sx={{
            display: "flex",
            flexDirection: {
              xs: "column",
              sm: "row",
            },
          }}
        >
          <Grid item xs={2}>
            <SideBar />
          </Grid>
          <Grid item xs={6}>
            <Main />
          </Grid>
          <Grid item xs={4}>
            <PhotoGallery />
          </Grid>
        </Grid>
      </Stack>
    </ThemeProvider>
  );
};

export default Home;
