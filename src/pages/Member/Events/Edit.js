import React from 'react';
import { useDispatch } from 'react-redux';
import produce from 'immer';
import { format, parseISO } from 'date-fns';

import AppForm from '../../../components/lib/form/AppForm';
import Form from './Form';

export default function Edit({ event }) {
  const dispatch = useDispatch();

  const tryParseISO = obj => {
    if (typeof obj === 'string') {
      return parseISO(obj);
    }

    return obj;
  };

  const onSubmit = values => {
    dispatch({
      type: 'UPDATE_EVENT',
      payload: produce(values, draftState => {
        draftState.tharavu_tags_id = values.tags.map(i => i.id);
        draftState.startDate = format(
          tryParseISO(values.startDate),
          'yyyy-M-d',
        );
        draftState.endDate = format(tryParseISO(values.endDate), 'yyyy-M-d');
        draftState.startsAt = format(tryParseISO(values.startsAt), 'hh:mm:ss');
        draftState.endsAt = format(tryParseISO(values.endsAt), 'hh:mm:ss');
      }),
    });
  };

  return (
    <AppForm>
      <Form onSubmit={onSubmit} initialValues={event} />
    </AppForm>
  );
}
