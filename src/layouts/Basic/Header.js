import React, { useState } from 'react';
import { useSelector } from 'react-redux';
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
  const currentUser = useSelector(state => state.session.currentUser);
  const classes = useStyles();

  const renderSigninBtn = () => {
    if (currentUser) {
      return (
        <Button variant="text" size="small" color="secondary">
          Sign out
        </Button>
      );
    }

    return (
      <Button
        variant="outlined"
        size="small"
        color="primary"
        onClick={() => setDialogOpen(true)}
      >
        Sign in
      </Button>
    );
  };

  return (
    <AppBar position="fixed" color="default" className={classes.appBar}>
      <Toolbar variant="dense">
        <Typography variant="h6" className={classes.title}>
          தரவு
        </Typography>
        {renderSigninBtn()}
        {!currentUser && (
          <AppDialog
            open={dialogOpen}
            title="Sign in"
            onClose={() => setDialogOpen(false)}
          >
            <SignIn />
          </AppDialog>
        )}
      </Toolbar>
    </AppBar>
  );
}
