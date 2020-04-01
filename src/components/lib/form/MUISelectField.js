import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';

export default function MUISelectField(props) {
  const { label, onChange, value, options } = props;

  const handleChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <FormControl fullWidth variant="outlined">
      <InputLabel>{label}</InputLabel>
      <Select fullWidth value={value} onChange={handleChange} label={label}>
        {options.map((op, index) => (
          <MenuItem key={index.toString()} value={op.value}>
            {op.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
