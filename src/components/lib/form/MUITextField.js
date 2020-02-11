import React from 'react';
import TextField from '@material-ui/core/TextField';

export default function MUITextField({ type, label, onChange, value }) {
  return (
    <TextField
      label={label}
      variant="outlined"
      type={type}
      onChange={onChange}
      value={value}
    />
  );
}
