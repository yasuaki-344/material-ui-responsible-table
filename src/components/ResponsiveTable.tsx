import * as React from "react";
import TableCell from "@mui/material/TableCell";
import Paper from "@mui/material/Paper";
import { rows } from "./TableData";
import { Box, Grid, Typography } from "@mui/material";

export const ResponsiveTable = () => {
  return (
    <Box component={Paper}>
      <Grid container margin={2}>
        <Grid item xs={4}>
          <Typography variant="body2">Dessert (100g serving)</Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography variant="body2">Calories</Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography variant="body2">Fat&nbsp;(g)</Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography variant="body2">Carbs&nbsp;(g)</Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography variant="body2">Protein&nbsp;(g)</Typography>
        </Grid>
        {rows.map((row) => (
          <React.Fragment key={row.name}>
            <Grid item xs={4}>
              <Typography variant="body2">{row.name}</Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography variant="body2">{row.calories}</Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography variant="body2">{row.fat}</Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography variant="body2">{row.carbs}</Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography variant="body2">{row.protein}</Typography>
            </Grid>
          </React.Fragment>
        ))}
      </Grid>
    </Box>
  );
};
