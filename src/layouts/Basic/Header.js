import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Button, Typography } from '@material-ui/core';

import AppDialog from '../../components/lib/AppDialog';
import SignIn from '../../components/app/SignIn';
import AccountMenu from '../../components/lib/AccountMenu';

const useStyles = makeStyles({
  appBar: {
    height: '50px',
    backgroundColor: 'inherit',
  },
  toolBar: {
    justifyContent: 'space-between',
  },
  title: {
    fontWeight: 'bold',
  },
});

export default function Header() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const currentUser = useSelector(state => state.session.currentUser);
  const classes = useStyles();

  const renderSigninBtn = () => {
    if (currentUser) {
      return <AccountMenu />;
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
      <Toolbar variant="dense" className={classes.toolBar}>
        <Button href="/">
          <Typography className={classes.title} variant="h6">
            தரவு
          </Typography>
        </Button>
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
