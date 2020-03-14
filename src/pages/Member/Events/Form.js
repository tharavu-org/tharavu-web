import React from 'react';
import { Form as ReactForm, Field } from '@open-tech-world/react-form';
import { Button, Box } from '@material-ui/core';

import TagsInputField from '../../../components/lib/form/TagsInputField';
import MUIDateField from '../../../components/lib/form/MUIDateField';
import MUITimeField from '../../../components/lib/form/MUITimeField';

export default function Form({ onSubmit, initialValues }) {
  return (
    <ReactForm onSubmit={onSubmit} initialValues={initialValues}>
      <Box display="flex" flexDirection="column">
        <Box display="flex" m={2}>
          <Field name="tags" label="Tags" component={TagsInputField} />
        </Box>
        <Box display="flex" m={2}>
          <Field
            name="locationTags"
            label="Location Tags"
            component={TagsInputField}
          />
        </Box>
        <Box display="flex" m={2}>
          <Field
            name="relationTags"
            label="Relation Tags"
            component={TagsInputField}
          />
        </Box>
        <Box display="flex" m={2}>
          <Field name="startDate" label="Start Date" component={MUIDateField} />
        </Box>
        <Box display="flex" m={2}>
          <Field name="endDate" label="End Date" component={MUIDateField} />
        </Box>
        <Box display="flex" m={2}>
          <Field name="startsAt" label="Starts At" component={MUITimeField} />
        </Box>
        <Box display="flex" m={2}>
          <Field name="endsAt" label="Ends At" component={MUITimeField} />
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
