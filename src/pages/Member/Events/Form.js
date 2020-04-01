import React from 'react';
import {
  Form as ReactForm,
  Field,
  FieldArray,
} from '@open-tech-world/react-form';
import { Button, Box } from '@material-ui/core';

import TagsInputField from '../../../components/lib/form/TagsInputField';
import MUIDateField from '../../../components/lib/form/MUIDateField';
import MUITimeField from '../../../components/lib/form/MUITimeField';
import MUITextField from '../../../components/lib/form/MUITextField';
import MUISwitchField from '../../../components/lib/form/MUISwitchField';
import MUISelectField from '../../../components/lib/form/MUISelectField';

export default function Form({ onSubmit, initialValues }) {
  const renderNumeralsField = (rows, push, remove) => {
    return (
      <div>
        {rows.map((r, index) => (
          <div key={r}>
            <Field
              name={`${r}.tagName`}
              label="Tag Name"
              component={MUITextField}
              type="text"
            />
            <Field
              name={`${r}.numeralValue`}
              label="Numeral Value"
              component={MUITextField}
              type="text"
            />
            <Field
              name={`${r}.numeralType`}
              label="Numeral Type"
              component={MUISelectField}
              options={[
                { name: 'Number', value: 0 },
                { name: 'Currency', value: 1 },
                { name: 'Percentage', value: 2 },
              ]}
            />
            <Field
              name={`${r}.prefix`}
              label="Prefix"
              component={MUITextField}
              type="text"
            />
            <Field
              name={`${r}.suffix`}
              label="Suffix"
              component={MUITextField}
              type="text"
            />
            <Field
              name={`${r}.numeralLeft`}
              label="Is Left"
              component={MUISwitchField}
            />
            <Field
              name={`${r}.decimalPoint`}
              label="Decimal Point"
              component={MUISwitchField}
            />
            <br />
            <Button color="secondary" onClick={() => remove(index)}>
              Remove
            </Button>
          </div>
        ))}
        <Button
          color="default"
          variant="outlined"
          onClick={() => {
            push({ numeralType: 0, numeralLeft: true, decimalPoint: false });
          }}
        >
          Add Numeral
        </Button>
      </div>
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
            Submit
          </Button>
        </Box>
      </Box>
    </ReactForm>
  );
}
