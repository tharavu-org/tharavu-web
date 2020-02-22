import React from 'react';
import { Paper, Chip, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  paper: {
    marginBottom: theme.spacing(2),
    padding: theme.spacing(2),
  },
  chip: {
    marginRight: theme.spacing(0.5),
  },
}));

export default function Event({ event }) {
  const classes = useStyles();

  const renderTags = () => {
    return event.tags.map((t, i) => (
      <Chip key={i.toString()} label={t.name} className={classes.chip} />
    ));
  };

  return (
    <Paper elevation={2} className={classes.paper}>
      {renderTags()}
    </Paper>
  );
}
