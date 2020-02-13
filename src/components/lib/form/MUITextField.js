import React from 'react';
import TextField from '@material-ui/core/TextField';

export default function MUITextField(props) {
  const { type, label, onChange, value, required } = props;
  return (
    <TextField
      fullWidth
      label={label}
      variant="outlined"
      type={type}
      onChange={onChange}
      value={value}
      required={required}
    />
  );
}
