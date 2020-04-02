import React from 'react';
import { TextField } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';

export default function AsyncAutocompleteField(props) {
  const { label, onChange, value, options } = props;

  return (
    <Autocomplete
      options={options}
      getOptionLabel={(option) => option.name}
      onChange={(e, newValue) => onChange(newValue)}
      value={value}
      renderInput={(params) => (
        <TextField
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...params}
          variant="outlined"
          label={label}
          fullWidth
        />
      )}
    />
  );
}
