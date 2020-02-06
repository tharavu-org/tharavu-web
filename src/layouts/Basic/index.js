import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Header from './Header';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    height: '100%',
  },
  content: {
    flexGrow: 1,
    marginTop: '50px',
  },
});

export default function BasicLayout(props) {
  const classes = useStyles();
  const { children } = props;
  return (
    <div className={classes.root}>
      <Header />
      <main className={classes.content}>{children}</main>
    </div>
  );
}
