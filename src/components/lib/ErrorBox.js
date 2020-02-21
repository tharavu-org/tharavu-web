import React from 'react';
import { Alert, AlertTitle } from '@material-ui/lab';

export default function ErrorBox({ error }) {
  const renderErrors = () => {
    if (typeof error === 'string') {
      return error;
    }
    if (typeof error === 'object' && Array.isArray(error)) {
      return error[0];
    }
    return null;
  };

  if (error) {
    return (
      <Alert severity="error">
        <AlertTitle>Error</AlertTitle>
        {renderErrors()}
      </Alert>
    );
  }

  return null;
}
