import React from 'react';
import Dialog from '@material-ui/core/Dialog';

import DialogTitle from './DialogTitle';
import DialogContent from './DialogContent';

export default function AppDialog(props) {
  const { onClose, open, title, children } = props;
  return (
    <Dialog fullWidth maxWidth="md" onClose={onClose} open={open}>
      <DialogTitle title={title} onClose={onClose} />
      <DialogContent onClose={onClose}>{children}</DialogContent>
    </Dialog>
  );
}
