import React from 'react';
import { Box } from '@material-ui/core';

export default function ErrorBox({ error }) {
  const renderErrors = () => {
    if (typeof error === 'string') {
      return error;
    }
    if (typeof error === 'object' && Array.isArray(error)) {
      return error[0];
    }
  };

  if (error) {
    return (
      <Box color="white" bgcolor="error.main" p={2}>
        {renderErrors()}
      </Box>
    );
  }

  return null;
}
