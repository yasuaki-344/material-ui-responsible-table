import { Grid } from "@mui/material";
import React from "react";
import "./App.css";
import { BasicTable } from "./components";

function App() {
  return (
    <Grid container spacing={1} margin={1}>
      <Grid item xs={12}>
        <BasicTable />
      </Grid>
    </Grid>
  );
}

export default App;
