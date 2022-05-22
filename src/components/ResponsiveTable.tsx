import * as React from "react";
import Paper from "@mui/material/Paper";
import { rows } from "./TableData";
import { Box, Grid, Typography } from "@mui/material";

export const ResponsiveTable = () => {
  return (
    <Box component={Paper}>
      <Box
        sx={{
          display: { xs: "none", sm: "block" },
        }}
      >
        <Grid container margin={2}>
          <Grid item sm={4}>
            <Typography variant="body2">Dessert (100g serving)</Typography>
          </Grid>
          <Grid item sm={2}>
            <Typography variant="body2">Calories</Typography>
          </Grid>
          <Grid item sm={2}>
            <Typography variant="body2">Fat&nbsp;(g)</Typography>
          </Grid>
          <Grid item sm={2}>
            <Typography variant="body2">Carbs&nbsp;(g)</Typography>
          </Grid>
          <Grid item sm={2}>
            <Typography variant="body2">Protein&nbsp;(g)</Typography>
          </Grid>
        </Grid>
      </Box>
      <Grid container margin={2}>
        {rows.map((row) => (
          <React.Fragment key={row.name}>
            <Grid item xs={12} sm={4}>
              <Typography variant="body2">{row.name}</Typography>
            </Grid>
            <Grid item xs={12} sm={2}>
              <Typography variant="body2">{row.calories}</Typography>
            </Grid>
            <Grid item xs={12} sm={2}>
              <Typography variant="body2">{row.fat}</Typography>
            </Grid>
            <Grid item xs={12} sm={2}>
              <Typography variant="body2">{row.carbs}</Typography>
            </Grid>
            <Grid item xs={12} sm={2}>
              <Typography variant="body2">{row.protein}</Typography>
            </Grid>
          </React.Fragment>
        ))}
      </Grid>
    </Box>
  );
};
