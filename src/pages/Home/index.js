import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Events from './Events';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'grid',
    gridTemplateColumns: '50% 50%',
    padding: theme.spacing(3),
    height: `calc(100% - ${theme.spacing(6)}px)`,
  },
}));

export default function Home() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Events />
      <div />
    </div>
  );
}
