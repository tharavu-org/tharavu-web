import React, { useEffect } from 'react';
import { TextField, Chip } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import { makeStyles } from '@material-ui/core/styles';

import { getAPI } from '../../../utils/restClient';

const useStyles = makeStyles({
  autoComplete: {
    width: '100%',
  },
});

export default function TagsInputField(props) {
  const classes = useStyles();
  const { label, onChange, value } = props;
  const [inputValue, setInputValue] = React.useState('');
  const [options, setOptions] = React.useState([]);

  useEffect(() => {
    if (inputValue === '') {
      setOptions([]);
      return;
    }
    async function fetchData() {
      const response = await getAPI(
        null,
        `/tharavu/tags?name_cont=${inputValue}&page=1&per=5`,
      );
      const tags = await response.json();
      setOptions(tags.data.tharavuTags);
    }
    fetchData();
  }, [inputValue]);

  const renderTags = (tags, getTagProps) => {
    return tags.map((option, index) => (
      // eslint-disable-next-line react/jsx-props-no-spreading
      <Chip color="primary" label={option.name} {...getTagProps({ index })} />
    ));
  };

  return (
    <Autocomplete
      className={classes.autoComplete}
      multiple
      options={options}
      getOptionLabel={option => option.name}
      onChange={(e, newValue) => onChange(newValue)}
      value={value}
      getOptionSelected={() => false}
      renderInput={params => (
        <TextField
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...params}
          variant="outlined"
          label={label}
          fullWidth
          onChange={e => setInputValue(e.target.value)}
        />
      )}
      renderTags={renderTags}
    />
  );
}
