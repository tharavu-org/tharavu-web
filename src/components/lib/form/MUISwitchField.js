import React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

export default function MUISwitchField(props) {
  const { label, onChange, value } = props;

  const handleChange = (e) => {
    onChange(e.target.checked);
  };

  return (
    <FormControlLabel
      control={
        <Switch checked={value} onChange={handleChange} color="primary" />
      }
      label={label}
      labelPlacement="start"
    />
  );
}
