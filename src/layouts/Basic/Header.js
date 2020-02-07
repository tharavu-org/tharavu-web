import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';

const useStyles = makeStyles({
  appBar: {
    height: '50px',
  },
  title: {
    flexGrow: 1,
  },
});

export default function Header() {
  const classes = useStyles();
  return (
    <AppBar position="fixed" color="default" className={classes.appBar}>
      <Toolbar variant="dense">
        <Typography variant="h6" className={classes.title}>
          தரவு
        </Typography>
        <Button variant="contained" size="small" color="primary">
          Sign in
        </Button>
      </Toolbar>
    </AppBar>
  );
}
