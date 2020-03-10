import React from 'react';
import { Paper, Chip, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(4),
    padding: theme.spacing(2),
  },
  chip: {
    marginRight: theme.spacing(0.5),
    marginTop: theme.spacing(0.5),
  },
}));

export default function Event({ event }) {
  const classes = useStyles();

  const renderTags = () => {
    return event.tags.map((t, i) => (
      <Chip
        key={i.toString()}
        label={t.name}
        className={classes.chip}
        variant="outlined"
        color="primary"
      />
    ));
  };

  return <Paper className={classes.paper}>{renderTags()}</Paper>;
}
