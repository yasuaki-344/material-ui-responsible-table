import * as React from "react";
import Paper from "@mui/material/Paper";
import { rows } from "./TableData";
import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";

export const ResponsiveTable = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

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

  const rowItem = (columHeader: string, value: any) =>
    isMobile ? (
      <Grid container>
        <Grid item xs={6}>
          <Typography gutterBottom variant="body2" align="right">
            {columHeader}
          </Typography>
        </Grid>
        <Grid item xs={1}>
          <Typography gutterBottom variant="body2" align="center">
            :
          </Typography>
        </Grid>
        <Grid item xs={5}>
          <Typography gutterBottom variant="body2" align="left">
            {value}
          </Typography>
        </Grid>
      </Grid>
    ) : (
      <Typography gutterBottom variant="body2">
        {value}
      </Typography>
    );

  const rowStyle = {
    borderBottom: "0.1pt solid #e0e0e0",
  };
  const endRowStyle = {
    borderBottom: "0.0pt solid #e0e0e0",
  };
  const boundary = rows.length - 1;

  return (
    <Box component={Paper} elevation={2}>
      <Box
        sx={{
          display: { xs: "none", sm: "block" },
          borderBottom: "0.1pt solid #e0e0e0",
        }}
      >
        <Grid container spacing={2} paddingX={2} marginBottom={1}>
          <Grid item sm={4}>
            <Typography gutterBottom variant="body2">
              Dessert (100g serving)
            </Typography>
          </Grid>
          <Grid item sm={2}>
            <Typography gutterBottom variant="body2">
              Calories
            </Typography>
          </Grid>
          <Grid item sm={2}>
            <Typography gutterBottom variant="body2">
              Fat&nbsp;(g)
            </Typography>
          </Grid>
          <Grid item sm={2}>
            <Typography gutterBottom variant="body2">
              Carbs&nbsp;(g)
            </Typography>
          </Grid>
          <Grid item sm={2}>
            <Typography gutterBottom variant="body2">
              Protein&nbsp;(g)
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <Grid container spacing={2} padding={2}>
        {rows.map((row, index: number) => (
          <React.Fragment key={row.name}>
            <Grid
              item
              xs={12}
              sm={4}
              sx={index < boundary ? rowStyle : endRowStyle}
              paddingBottom={1}
            >
              {rowHeader(row.name)}
            </Grid>
            <Grid
              item
              xs={12}
              sm={2}
              sx={index < boundary ? rowStyle : endRowStyle}
              paddingBottom={1}
            >
              {rowItem("Calories", row.calories)}
            </Grid>
            <Grid
              item
              xs={12}
              sm={2}
              sx={index < boundary ? rowStyle : endRowStyle}
              paddingBottom={1}
            >
              {rowItem("Fat (g)", row.fat)}
            </Grid>
            <Grid
              item
              xs={12}
              sm={2}
              sx={index < boundary ? rowStyle : endRowStyle}
              paddingBottom={1}
            >
              {rowItem("Carbs (g)", row.carbs)}
            </Grid>
            <Grid
              item
              xs={12}
              sm={2}
              sx={index < boundary ? rowStyle : endRowStyle}
              paddingBottom={1}
            >
              {rowItem("Protein (g)", row.protein)}
            </Grid>
          </React.Fragment>
        ))}
      </Grid>
    </Box>
  );
};
