import * as React from "react";
import {
  withStyles,
  Theme,
  createStyles,
  makeStyles
} from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const StyledTableCell = withStyles((theme: Theme) =>
  createStyles({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white
    },
    body: {
      fontSize: 14
    }
  })
)(TableCell);

const StyledTableRow = withStyles((theme: Theme) =>
  createStyles({
    root: {
      "&:nth-of-type(odd)": {
        backgroundColor: theme.palette.background.default
      }
    }
  })
)(TableRow);

function createData(fname, lname, id, email, dob, gender, isAdmin, bu) {
  return { fname, lname, id, email, dob, gender, isAdmin, bu };
}

const rows = [
  createData(
    "Dell",
    "EMC",
    5223323,
    "dell@hcl.com",
    "2019-04-28T14:45:15",
    "male",
    "true",
    "Administrator"
  ),
  createData(
    "Dell",
    "EMC",
    5223323,
    "dell@hcl.com",
    "2019-04-28T14:45:15",
    "male",
    "true",
    "Administrator"
  ),
  createData(
    "Dell",
    "EMC",
    5223323,
    "dell@hcl.com",
    "2019-04-28T14:45:15",
    "male",
    "true",
    "Administrator"
  ),
  createData(
    "Dell",
    "EMC",
    5223323,
    "dell@hcl.com",
    "2019-04-28T14:45:15",
    "male",
    "true",
    "Administrator"
  ),
  createData(
    "Dell",
    "EMC",
    5223323,
    "dell@hcl.com",
    "2019-04-28T14:45:15",
    "male",
    "true",
    "Administrator"
  ),
  createData(
    "Dell",
    "EMC",
    5223323,
    "dell@hcl.com",
    "2019-04-28T14:45:15",
    "male",
    "true",
    "Administrator"
  )
];

const useStyles = makeStyles({
  table: {
    minWidth: 700
  }
});

export default function CustomizedTables() {
  const classes = useStyles({});

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>First Name</StyledTableCell>
            <StyledTableCell align="right">Last Name</StyledTableCell>
            <StyledTableCell align="right">ID</StyledTableCell>
            <StyledTableCell align="right">Email</StyledTableCell>
            <StyledTableCell align="right">DOB</StyledTableCell>
            <StyledTableCell align="right">Gender</StyledTableCell>
            <StyledTableCell align="right">isAdmin</StyledTableCell>
            <StyledTableCell align="right">BU</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <StyledTableRow key={row.fname}>
              <StyledTableCell component="th" scope="row">
                {row.fname}
              </StyledTableCell>
              <StyledTableCell align="right">{row.lname}</StyledTableCell>
              <StyledTableCell align="right">{row.id}</StyledTableCell>
              <StyledTableCell align="right">{row.email}</StyledTableCell>
              <StyledTableCell align="right">{row.dob}</StyledTableCell>
              <StyledTableCell align="right">{row.gender}</StyledTableCell>
              <StyledTableCell align="right">{row.isAdmin}</StyledTableCell>
              <StyledTableCell align="right">{row.bu}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
