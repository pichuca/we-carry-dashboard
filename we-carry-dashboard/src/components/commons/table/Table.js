import React from 'react';
import PropTypes from 'prop-types';
import { Fraction } from 'fractional';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

// Util sorting functions.
// import { stableSort, getSorting } from './sorting/sorting';

import './Table.css';


const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: '#2196f3',
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
});

let id = 0;
function createData(name, calories, fat, carbs, protein) {
  id += 1;
  return { id, name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, new Fraction(6, 7).toString(), 24, 4.0),
  createData('Ice cream sandwich', 237, new Fraction(1, 32).toString(), 37, 4.3),
  createData('Eclair', 262, 16.0, new Fraction(19, 24).toString(), 6.0),
  createData('Cupcake', 305, 3.7, new Fraction(45, 66).toString(), 4.3),
  createData('Gingerbread', 356, new Fraction(1, 14).toString(), 49, 3.9),
];

function CustomizedTable(props) {
  const { classes, tableHeads, tableName, cols } = props;

  return (
   
    <Paper className={classes.root}>
      <h2 className="ui-table-title">{tableName}</h2>
      <Table className={classes.table}>       
        <TableHead>
          <TableRow>
            {tableHeads.map((head, index) => {
              return (
                <CustomTableCell numeric={head.isNumeric} key={index}>{head.label}</CustomTableCell>
              );
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => {
            return (
              <TableRow className={classes.row} key={row.id}>
                <CustomTableCell component="th" scope="row">
                  {row.name}
                </CustomTableCell>
                <CustomTableCell numeric>{row.calories}</CustomTableCell>
                <CustomTableCell numeric>{row.fat}</CustomTableCell>
                <CustomTableCell numeric>{row.carbs}</CustomTableCell>
                {cols === 5 ? <CustomTableCell numeric>{row.protein}</CustomTableCell> : null}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  );
}

CustomizedTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CustomizedTable);
