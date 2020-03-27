import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Events from './Events';
import Filter from './Filter';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'grid',
    gridTemplateColumns: '20% auto',
    gridColumnGap: theme.spacing(2),
    padding: theme.spacing(3),
    height: `calc(100% - ${theme.spacing(6)}px)`,
  },
}));

export default function Explore() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Filter />
      <Events />
    </div>
  );
}
