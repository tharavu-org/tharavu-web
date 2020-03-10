import React, { useEffect, useState } from 'react';
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

import AppDialog from '../../../components/lib/AppDialog';
import Edit from './Edit';
import AppPagination from '../../../components/lib/AppPagination';

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
  const rows = useSelector(state => state.event.events);
  const currentFormSuccess = useSelector(state => state.currentForm.success);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [event, setEvent] = useState(null);

  useEffect(() => {
    if (currentFormSuccess) {
      setDialogOpen(false);
    }
  }, [currentFormSuccess]);

  useEffect(() => {
    dispatch({ type: 'GET_EVENTS' });
  }, [dispatch]);

  const handleEdit = obj => {
    setEvent(obj);
    setDialogOpen(true);
  };

  const handleDelete = id => {
    // eslint-disable-next-line no-alert
    if (window.confirm('Delete?')) {
      dispatch({ type: 'DELETE_EVENT', payload: id });
    }
  };

  const renderTags = tags => {
    return tags.map((t, i) => {
      return <Chip key={i.toString()} label={t.name} />;
    });
  };

  return (
    <>
      <TableContainer component={Paper} className={classes.container}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Tags</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {renderTags(row.tags)}
                </TableCell>
                <TableCell component="th" scope="row">
                  {row.startDate}
                </TableCell>
                <TableCell component="th" scope="row">
                  <Button
                    className={classes.actionBtn}
                    variant="outlined"
                    size="small"
                    onClick={() => handleEdit(row)}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="outlined"
                    size="small"
                    color="secondary"
                    onClick={() => handleDelete(row.id)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <AppPagination actionType="GET_EVENTS" />
      <AppDialog
        open={dialogOpen}
        title="Edit Tag"
        onClose={() => setDialogOpen(false)}
      >
        <Edit event={event} />
      </AppDialog>
    </>
  );
}
