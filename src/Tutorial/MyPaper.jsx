import { AccessTime } from "@mui/icons-material";
import { Paper } from "@mui/material";
import React from "react";

const MyPaper = () => {
  return (
    <Paper elevation={15} square>
      Hello
      <AccessTime />
    </Paper>
  );
};

export default MyPaper;
