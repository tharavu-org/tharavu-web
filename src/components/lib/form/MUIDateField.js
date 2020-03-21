import React from 'react';
import { DesktopDatePicker } from '@material-ui/pickers';

export default function MUIDateField({ label, onChange, value }) {
  return (
    <DesktopDatePicker
      autoOk
      variant="outlined"
      label={label}
      disableMaskedInput
      value={value}
      onChange={onChange}
      fullWidth
    />
  );
}
