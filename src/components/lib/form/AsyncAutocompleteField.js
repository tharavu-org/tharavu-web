import React, { useEffect } from 'react';
import { TextField } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';

import { getAPI } from '../../../utils/restClient';

export default function AsyncAutocompleteField(props) {
  const { label, onChange, value, url } = props;
  const [inputValue, setInputValue] = React.useState('');
  const [options, setOptions] = React.useState([]);

  useEffect(() => {
    if (inputValue === '') {
      setOptions([]);
      return;
    }
    async function fetchData() {
      const response = await getAPI(null, `${url}=${inputValue}&page=1&per=5`);
      const responseData = await response.json();
      setOptions(responseData.data);
    }
    fetchData();
  }, [inputValue, url]);

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
          onChange={(e) => setInputValue(e.target.value)}
        />
      )}
    />
  );
}
