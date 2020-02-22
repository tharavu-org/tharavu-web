import React, { useEffect } from 'react';
import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';
import List from './List';

const useStyles = makeStyles(theme => ({
  paper: {
    height: `calc(100% - ${theme.spacing(4)}px)`,
    padding: theme.spacing(2),
    overflowY: 'auto',
  },
}));

export default function Events() {
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    dispatch({ type: 'GET_EVENTS' });
  }, [dispatch]);

  return (
    <Paper className={classes.paper}>
      <List />
    </Paper>
  );
}
