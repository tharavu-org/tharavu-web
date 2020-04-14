import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Button } from '@material-ui/core';

import AppDialog from '../../../components/lib/AppDialog';
import New from './New';
import List from './List';

export default function Events() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const currentFormSuccess = useSelector((state) => state.currentForm.success);

  useEffect(() => {
    if (currentFormSuccess) {
      setDialogOpen(false);
    }
  }, [currentFormSuccess]);

  return (
    <div>
      <Button
        variant="contained"
        size="small"
        color="primary"
        onClick={() => setDialogOpen(true)}
      >
        New Event
      </Button>
      <List />
      <AppDialog
        open={dialogOpen}
        title="New Event"
        onClose={() => setDialogOpen(false)}
      >
        <New />
      </AppDialog>
    </div>
  );
}
