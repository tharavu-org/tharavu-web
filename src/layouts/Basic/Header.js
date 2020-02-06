import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

const useStyles = makeStyles({
  appBar: {
    height: '50px',
  },
});

export default function Header() {
  const classes = useStyles();
  return (
    <AppBar position="fixed" color="default" className={classes.appBar}>
      <Toolbar variant="dense">
        <Typography variant="h6">தரவு</Typography>
      </Toolbar>
    </AppBar>
  );
}
