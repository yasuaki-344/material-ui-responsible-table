import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { rows } from "./TableData";
import { Box, Grid, Typography } from "@mui/material";

export const ResponsiveTable = () => {
  return (
    <Box component={Paper}>
      <Grid container margin={2}>
        <Grid item xs={2}>
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
      </Grid>
      <Table aria-label="simple table">
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
};
