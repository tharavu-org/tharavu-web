import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    height: '100%',
  },
  content: {
    flexGrow: 1,
  },
}));

export default function BasicLayout(props) {
  const classes = useStyles();
  const { children } = props;
  return (
    <div className={classes.root}>
      <main className={classes.content}>{children}</main>
    </div>
  );
}
