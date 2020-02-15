import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

export default function MUIRadioField(props) {
  const { onChange, value, label, options } = props;

  return (
    <RadioGroup aria-label={label} value={value} onChange={onChange} row>
      {options.map(i => (
        <FormControlLabel
          key={i.label}
          value={i.value}
          control={<Radio />}
          label={i.label}
        />
      ))}
    </RadioGroup>
  );
}
