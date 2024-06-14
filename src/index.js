import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Mytheme } from "./MyTheme";
import { ThemeProvider } from "@emotion/react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider theme={Mytheme}>
    <App />
  </ThemeProvider>
);
