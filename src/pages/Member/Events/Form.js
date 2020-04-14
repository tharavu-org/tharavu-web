import React from 'react';
import {
  Form as ReactForm,
  Field,
  FieldArray,
} from '@open-tech-world/react-form';
import { Button, Box } from '@material-ui/core';

import AsyncAutocompleteField from '../../../components/lib/form/AsyncAutocompleteField';
import TagsInputField from '../../../components/lib/form/TagsInputField';
import MUIDateField from '../../../components/lib/form/MUIDateField';
import MUITimeField from '../../../components/lib/form/MUITimeField';
import MUITextField from '../../../components/lib/form/MUITextField';
import MUISwitchField from '../../../components/lib/form/MUISwitchField';
import MUISelectField from '../../../components/lib/form/MUISelectField';

export default function Form({ onSubmit, initialValues, edit }) {
  const renderNumeralsField = (rows, push, remove) => {
    return (
      <Box display="flex" flexDirection="column" flexGrow="1">
        {rows.map((r, index) => (
          <Box display="flex" flexDirection="column" key={r}>
            <Box display="flex" my={1}>
              <Field
                name={`${r}.tag`}
                label="Tag"
                component={AsyncAutocompleteField}
                type="text"
                url="/tharavu/tags?name_cont"
              />
            </Box>
            <Box display="flex" my={1}>
              <Field
                name={`${r}.numeralStr`}
                label="Numeral String"
                component={MUITextField}
                type="text"
              />
            </Box>
            <Box display="flex" my={1}>
              <Field
                name={`${r}.numeralValue`}
                label="Numeral Value"
                component={MUITextField}
                type="text"
              />
            </Box>
            <Box display="flex" my={1}>
              <Field
                name={`${r}.numeralType`}
                label="Numeral Type"
                component={MUISelectField}
                options={[
                  { name: 'Number', value: 'number' },
                  { name: 'Currency', value: 'currency' },
                  { name: 'Percentage', value: 'percentage' },
                ]}
              />
            </Box>
            <Box display="flex" my={1}>
              <Field
                name={`${r}.numeralLeft`}
                label="Is Left"
                component={MUISwitchField}
              />
            </Box>
            <Button
              variant="outlined"
              color="secondary"
              onClick={() => remove(index)}
            >
              Remove
            </Button>
          </Box>
        ))}
        <Box my={2}>
          <Button
            color="default"
            variant="outlined"
            onClick={() => {
              push({
                numeralType: 'number',
                numeralLeft: true,
                decimalPoint: false,
              });
            }}
          >
            Add Numeral
          </Button>
        </Box>
      </Box>
    );
  };

  return (
    <ReactForm onSubmit={onSubmit} initialValues={initialValues}>
      <Box display="flex" flexDirection="column">
        <Box display="flex" m={2}>
          <Field name="tags" label="Tags" component={TagsInputField} />
        </Box>
        <Box display="flex" m={2}>
          <FieldArray
            name="numerals"
            label="Numerals"
            component={renderNumeralsField}
          />
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
            {edit ? 'Update' : 'Create'}
          </Button>
        </Box>
      </Box>
    </ReactForm>
  );
}
