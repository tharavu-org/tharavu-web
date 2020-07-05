import React, { useEffect } from 'react';
import { DesktopDatePicker } from '@material-ui/pickers';
import { useField } from '@open-tech-world/react-form';
import { TextField } from '@material-ui/core';

export default function MUIDateField({ label, onChange, value, startDate }) {
  const { state, setFieldValue } = useField();

  useEffect(() => {
    if (startDate && state.startDate && state.endDate === null) {
      setFieldValue('endDate', state.startDate);
    }
  }, [startDate, state.startDate, state.endDate, setFieldValue]);

  return (
    <DesktopDatePicker
      autoOk
      label={label}
      disableMaskedInput
      value={value}
      onChange={onChange}
      renderInput={(props) => (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <TextField {...props} variant="outlined" fullWidth />
      )}
    />
  );
}
