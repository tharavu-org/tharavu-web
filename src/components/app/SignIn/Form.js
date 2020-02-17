import React from 'react';
import { Form as ReactForm, Field } from '@open-tech-world/react-form';
import { Button, Box } from '@material-ui/core';

import MUITextField from '../../lib/form/MUITextField';

export default function Form({ onSubmit }) {
  return (
    <ReactForm onSubmit={onSubmit}>
      <Box display="flex" flexDirection="column">
        <Box display="flex" m={2}>
          <Field
            component={MUITextField}
            name="email"
            label="Email Address"
            required
          />
        </Box>
        <Box display="flex" m={2}>
          <Field
            component={MUITextField}
            name="password"
            label="Password"
            type="password"
            required
          />
        </Box>
        <Box display="flex" flexDirection="row-reverse" m={2}>
          <Button type="submit" variant="contained" color="primary">
            Sign In
          </Button>
        </Box>
      </Box>
    </ReactForm>
  );
}
