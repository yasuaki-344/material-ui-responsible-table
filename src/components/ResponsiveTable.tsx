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
              <Typography variant="body2">{row.name}</Typography>
            </Grid>
            <Grid item xs={12} sm={2}>
              <Box
                sx={{
                  display: { xs: "block", sm: "none" },
                }}
              >
                <Typography variant="body2">Calories:{row.calories}</Typography>
              </Box>
              <Box
                sx={{
                  display: { xs: "none", sm: "block" },
                }}
              >
                <Typography variant="body2">{row.calories}</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={2}>
              <Box
                sx={{
                  display: { xs: "block", sm: "none" },
                }}
              >
                <Typography variant="body2">Fat&nbsp;(g):{row.fat}</Typography>
              </Box>
              <Box
                sx={{
                  display: { xs: "none", sm: "block" },
                }}
              >
                <Typography variant="body2">{row.fat}</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={2}>
              <Box
                sx={{
                  display: { xs: "block", sm: "none" },
                }}
              >
                <Typography variant="body2">
                  Carbs&nbsp;(g):{row.carbs}
                </Typography>
              </Box>
              <Box
                sx={{
                  display: { xs: "none", sm: "block" },
                }}
              >
                <Typography variant="body2">{row.carbs}</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={2}>
              <Box
                sx={{
                  display: { xs: "block", sm: "none" },
                }}
              >
                <Typography variant="body2">
                  Protein&nbsp;(g):{row.protein}
                </Typography>
              </Box>
              <Box
                sx={{
                  display: { xs: "none", sm: "block" },
                }}
              >
                <Typography variant="body2">{row.protein}</Typography>
              </Box>
            </Grid>
          </React.Fragment>
        ))}
      </Grid>
    </Box>
  );
};
