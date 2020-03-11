import React from 'react';
import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import List from './List';

const useStyles = makeStyles(theme => ({
  paper: {
    height: `calc(100% - ${theme.spacing(4)}px)`,
    padding: theme.spacing(2),
    overflowY: 'auto',
  },
}));

export default function Events() {
  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <List />
    </Paper>
  );
}
