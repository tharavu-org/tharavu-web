import React, { useState } from 'react';
import { Button } from '@material-ui/core';

import AppDialog from '../../../components/lib/AppDialog';
import New from './New';

export default function Tags() {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <div>
      <Button
        variant="outlined"
        size="medium"
        color="primary"
        onClick={() => setDialogOpen(true)}
      >
        Create
      </Button>
      <AppDialog
        open={dialogOpen}
        title="Create Tag"
        onClose={() => setDialogOpen(false)}
      >
        <New />
      </AppDialog>
    </div>
  );
}
