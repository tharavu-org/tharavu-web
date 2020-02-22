import React from 'react';
import { DesktopTimePicker } from '@material-ui/pickers';

export default function MUIDateField(props) {
  const { label, onChange, value } = props;
  return (
    <DesktopTimePicker
      ampm={false}
      autoOk
      variant="outlined"
      label={label}
      views={['hours', 'minutes', 'seconds']}
      format="HH:mm:ss"
      mask="__:__:__"
      value={value}
      onChange={onChange}
      fullWidth
    />
  );
}
