import React from "react";
import Typography from "@mui/material/Typography";
import { Button, Box, Container, Grid } from "@mui/material";

export const MyLayout = () => {
  return (
    <>
      <Typography variant="h4" color="initial">
        This is Box
      </Typography>
      <Box bgcolor="red">Hello</Box>
      <Container maxWidth="md">
        <Typography variant="h5" color="initial">
          This is Heading of Container
        </Typography>
      </Container>
      <Container maxWidth="md">
        <Grid container spacing={2}>
          <Grid item xs="8">
            <Button sx={{ width: "100%" }} variant="contained">
              Hello
            </Button>
          </Grid>
          <Grid item xs="4">
            <Button  sx={{ width: "100%" }} variant="contained">
              Hello
            </Button>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
