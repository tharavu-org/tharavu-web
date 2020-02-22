import React from 'react';
import { DesktopDatePicker } from '@material-ui/pickers';

export default function MUIDateField(props) {
  const { label, onChange, value } = props;
  return (
    <DesktopDatePicker
      autoOk
      variant="outlined"
      label={label}
      format="yyyy/MM/dd"
      mask="____/__/__"
      value={value}
      onChange={onChange}
      fullWidth
    />
  );
}
