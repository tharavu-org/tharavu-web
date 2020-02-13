import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';

import AppDialog from '../../components/lib/AppDialog';
import SignIn from '../../components/app/SignIn';

const useStyles = makeStyles({
  appBar: {
    height: '50px',
  },
  title: {
    flexGrow: 1,
  },
});

export default function Header() {
  const [dialogOpen, setDialogOpen] = useState(false);

  const classes = useStyles();
  return (
    <AppBar position="fixed" color="default" className={classes.appBar}>
      <Toolbar variant="dense">
        <Typography variant="h6" className={classes.title}>
          தரவு
        </Typography>
        <Button
          variant="outlined"
          size="small"
          color="primary"
          onClick={() => setDialogOpen(true)}
        >
          Sign in
        </Button>
        <AppDialog
          open={dialogOpen}
          title="Sign in"
          onClose={() => setDialogOpen(false)}
        >
          <SignIn />
        </AppDialog>
      </Toolbar>
    </AppBar>
  );
}
