import React from 'react';
import { Box } from '@material-ui/core';

export default function ErrorBox({ error }) {
  if (error) {
    return (
      <Box color="white" bgcolor="error.main" p={2}>
        {error}
      </Box>
    );
  }

  return null;
}
