import { Grid } from "@mui/material";
import React from "react";
import "./App.css";
import { BasicTable, MyComponent, ResponsiveTable } from "./components";

const App = () => {
  return (
    <Grid container padding={1} spacing={5}>
      <Grid item xs={12}>
        <BasicTable />
      </Grid>
      <Grid item xs={12}>
        <MyComponent />
      </Grid>
      <Grid item xs={12}>
        <ResponsiveTable />
      </Grid>
    </Grid>
  );
};

export default App;
