import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Chip from '@material-ui/core/Chip';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  container: {
    marginTop: theme.spacing(3),
  },
  actionBtn: {
    marginRight: theme.spacing(1),
  },
}));

export default function List() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const rows = useSelector(state => state.tag.tags);

  useEffect(() => {
    dispatch({ type: 'GET_TAGS' });
  }, [dispatch]);

  return (
    <TableContainer component={Paper} className={classes.container}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                <Chip label={row.name} />
              </TableCell>
              <TableCell component="th" scope="row">
                <Button
                  className={classes.actionBtn}
                  variant="outlined"
                  size="small"
                >
                  Edit
                </Button>
                <Button variant="outlined" size="small" color="secondary">
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
