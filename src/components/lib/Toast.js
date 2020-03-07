import React, { useEffect, useState } from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';
import { useSelector, useDispatch } from 'react-redux';

export default function Toast() {
  const [open, setOpen] = useState(false);
  const toast = useSelector(state => state.toast);
  const dispatch = useDispatch();

  useEffect(() => {
    setOpen(toast.open);
  }, [toast.open]);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    if (open) {
      dispatch({ type: 'HIDE_TOAST' });
    }
  };

  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
      open={open}
      autoHideDuration={5000}
      onClose={handleClose}
    >
      <Alert variant="filled" onClose={handleClose} severity={toast.variant}>
        {toast.msg}
      </Alert>
    </Snackbar>
  );
}
