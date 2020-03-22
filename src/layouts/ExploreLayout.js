import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Header from './Basic/Header';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    height: '100%',
    flexDirection: 'column',
  },
  content: {
    marginTop: '50px',
    height: `calc(100% - 50px)`,
    minHeight: `calc(100% - 50px)`,
    overflow: 'hidden',
  },
});

export default function ExploreLayout(props) {
  const classes = useStyles();
  const { children } = props;
  return (
    <div className={classes.root}>
      <Header />
      <main className={classes.content}>{children}</main>
    </div>
  );
}
