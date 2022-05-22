import * as React from "react";
import Paper from "@mui/material/Paper";
import { rows } from "./TableData";
import { Box, Grid, Typography } from "@mui/material";

export const ResponsiveTable = () => {
  const rowHeader = (name: string) => (
    <Typography
      variant="body2"
      sx={{
        display: { xs: "flex", sm: "block" },
        justifyContent: { xs: "center", sm: "start" },
      }}
    >
      {name}
    </Typography>
  );

  const rowItem = (columHeader: string, value: any) => (
    <>
      <Box
        sx={{
          display: { xs: "block", sm: "none" },
        }}
      >
        <Grid container>
          <Grid item xs={6}>
            <Typography
              variant="body2"
              align="right"
            >
              {columHeader}
            </Typography>
          </Grid>
          <Grid item xs={1}>
            <Typography variant="body2" align="center">
              :
            </Typography>
          </Grid>
          <Grid item xs={5}>
            <Typography
              variant="body2"
              align="left"
            >
              {value}
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          display: { xs: "none", sm: "block" },
        }}
      >
        <Typography variant="body2">{value}</Typography>
      </Box>
    </>
  );

  return (
    <Box component={Paper}>
      <Box
        sx={{
          display: { xs: "none", sm: "block" },
        }}
      >
        <Grid container spacing={2} padding={2}>
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
      <Grid container spacing={2} padding={2}>
        {rows.map((row) => (
          <React.Fragment key={row.name}>
            <Grid item xs={12} sm={4}>
              {rowHeader(row.name)}
            </Grid>
            <Grid item xs={12} sm={2}>
              {rowItem("Calories", row.calories)}
            </Grid>
            <Grid item xs={12} sm={2}>
              {rowItem("Fat (g)", row.fat)}
            </Grid>
            <Grid item xs={12} sm={2}>
              {rowItem("Carbs (g)", row.carbs)}
            </Grid>
            <Grid item xs={12} sm={2}>
              {rowItem("Protein (g)", row.protein)}
            </Grid>
          </React.Fragment>
        ))}
      </Grid>
    </Box>
  );
};
