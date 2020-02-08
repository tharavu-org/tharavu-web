import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Icon from '@mdi/react';
import { mdiClose } from '@mdi/js';

const useStyles = makeStyles(theme => ({
  root: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(),
    top: theme.spacing(),
    color: theme.palette.grey[500],
  },
}));

export default function DialogTitle({ title, onClose }) {
  const classes = useStyles();
  return (
    <MuiDialogTitle disableTypography className={classes.root}>
      <Typography variant="h6">{title}</Typography>
      {onClose ? (
        <IconButton
          aria-label="Close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <Icon path={mdiClose} size={1} />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
}
