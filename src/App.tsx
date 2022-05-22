import { Grid } from "@mui/material";
import React from "react";
import "./App.css";
import { BasicTable, ResponsiveTable } from "./components";

function App() {
  return (
    <Grid container spacing={1} margin={1}>
      <Grid item xs={12}>
        <BasicTable />
      </Grid>
      <Grid item xs={12}>
        <ResponsiveTable />
      </Grid>
    </Grid>
  );
}

export default App;
