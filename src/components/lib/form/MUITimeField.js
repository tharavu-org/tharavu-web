import React from 'react';
import { DesktopTimePicker } from '@material-ui/pickers';
import { TextField } from '@material-ui/core';

export default function MUITimeField(props) {
  const { label, onChange, value } = props;
  return (
    <DesktopTimePicker
      ampm={false}
      autoOk
      label={label}
      views={['hours', 'minutes', 'seconds']}
      value={value}
      onChange={onChange}
      renderInput={(inputProps) => (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <TextField {...inputProps} variant="outlined" fullWidth />
      )}
    />
  );
}
