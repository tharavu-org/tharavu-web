import React, { useState } from 'react';
import { Paper, Tabs, Tab, Typography } from '@material-ui/core';
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
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper className={classes.paper}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="Live" />
        <Tab label="Drafts" />
      </Tabs>
      {value === 0 ? (
        <List />
      ) : (
        <Typography variant="body1">No Events</Typography>
      )}
    </Paper>
  );
}
