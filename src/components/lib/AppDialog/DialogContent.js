import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MuiDialogContent from '@material-ui/core/DialogContent';

const useStyles = makeStyles(theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(3),
    minHeight: '350px',
  },
}));

export default function DialogContent({ children }) {
  const classes = useStyles();
  return (
    <MuiDialogContent className={classes.root}>{children}</MuiDialogContent>
  );
}
