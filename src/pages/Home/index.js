import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Events from './Events';
import Categories from './Categories';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'grid',
    gridTemplateColumns: `calc(50% - ${theme.spacing(
      1,
    )}px) calc(50% - ${theme.spacing(1)}px)`,
    gridColumnGap: theme.spacing(2),
    padding: theme.spacing(3),
    minHeight: `calc(100vh - 50px)`,
  },
}));

export default function Home() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Events />
      <Categories />
    </div>
  );
}
