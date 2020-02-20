import React from 'react';
import { Form as ReactForm, Field } from '@open-tech-world/react-form';
import { Button, Box } from '@material-ui/core';
import MUITextField from '../../../components/lib/form/MUITextField';

export default function Form({ onSubmit, initialValues }) {
  return (
    <ReactForm onSubmit={onSubmit} initialValues={initialValues}>
      <Box display="flex" flexDirection="column">
        <Box display="flex" m={2}>
          <Field component={MUITextField} name="name" label="Name" required />
        </Box>
        <Box display="flex" flexDirection="row-reverse" m={2}>
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </Box>
      </Box>
    </ReactForm>
  );
}
