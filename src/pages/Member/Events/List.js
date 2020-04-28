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
import { Button, FormControlLabel, Switch } from '@material-ui/core';

import AppDialog from '../../../components/lib/AppDialog';
import Edit from './Edit';
import AppPagination from '../../../components/lib/AppPagination';

const useStyles = makeStyles((theme) => ({
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
  const events = useSelector((state) => state.event.events);
  const currentUser = useSelector((state) => state.session.currentUser);
  const currentFormSuccess = useSelector((state) => state.currentForm.success);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [event, setEvent] = useState(null);

  useEffect(() => {
    if (currentFormSuccess) {
      setDialogOpen(false);
    }
  }, [currentFormSuccess]);

  useEffect(() => {
    dispatch({ type: 'GET_EVENTS', payload: { page: 1 } });
  }, [dispatch]);

  const handleEdit = (obj) => {
    setEvent(obj);
    setDialogOpen(true);
  };

  const handleDelete = (id) => {
    // eslint-disable-next-line no-alert
    if (window.confirm('Delete?')) {
      dispatch({ type: 'DELETE_EVENT', payload: id });
    }
  };

  const handlePublish = (e) => {
    // eslint-disable-next-line no-alert
    if (window.confirm(`${e.isLive ? 'Unpublish' : 'Publish'}?`)) {
      const payload = { id: e.id, isLive: !e.isLive };
      payload.approvedById = e.isLive ? null : currentUser.memberId;
      dispatch({
        type: 'UPDATE_EVENT',
        payload,
      });
    }
  };

  const renderTags = (tags) => {
    return tags.map((t, i) => {
      return <Chip key={i.toString()} label={t.name} />;
    });
  };

  const renderPublishBtn = (e) => {
    return (
      <FormControlLabel
        control={<Switch checked={e.isLive} color="primary" />}
        label={e.isLive ? 'LIVE' : 'DRAFT'}
        labelPlacement="end"
        onChange={() => handlePublish(e)}
      />
    );
  };

  return (
    <>
      <TableContainer component={Paper} className={classes.container}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Tags</TableCell>
              <TableCell>Category</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {events.map((e) => (
              <TableRow key={e.id}>
                <TableCell component="th" scope="row">
                  {renderTags(e.tags)}
                </TableCell>
                <TableCell component="th" scope="row">
                  {e.category}
                </TableCell>
                <TableCell component="th" scope="row">
                  {e.startDate}
                </TableCell>
                <TableCell component="th" scope="row">
                  <Button
                    className={classes.actionBtn}
                    variant="outlined"
                    size="small"
                    onClick={() => handleEdit(e)}
                  >
                    Edit
                  </Button>
                  <Button
                    className={classes.actionBtn}
                    variant="outlined"
                    size="small"
                    color="secondary"
                    onClick={() => handleDelete(e.id)}
                  >
                    Delete
                  </Button>
                  {renderPublishBtn(e)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <AppPagination actionType="GET_EVENTS" />
      <AppDialog
        open={dialogOpen}
        title="Edit Event"
        onClose={() => setDialogOpen(false)}
      >
        <Edit event={event} />
      </AppDialog>
    </>
  );
}
