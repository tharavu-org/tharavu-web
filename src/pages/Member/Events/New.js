import React from 'react';
import { useDispatch } from 'react-redux';
import produce from 'immer';
import { format } from 'date-fns';

import AppForm from '../../../components/lib/form/AppForm';
import Form from './Form';

export default function New() {
  const dispatch = useDispatch();

  const dateTime = new Date();
  dateTime.setHours(0, 0, 0);
  const initialValues = {
    tags: [],
    startDate: dateTime,
    endDate: dateTime,
    startsAt: dateTime,
    endsAt: dateTime,
  };

  const onSubmit = values => {
    dispatch({
      type: 'CREATE_EVENT',
      payload: produce(values, draftState => {
        draftState.tharavu_tags_id = values.tags.map(i => i.id);
        draftState.startDate = format(values.startDate, 'yyyy-M-d');
        draftState.endDate = format(values.endDate, 'yyyy-M-d');
        draftState.startsAt = format(values.startsAt, 'hh:mm:ss');
        draftState.endsAt = format(values.endsAt, 'hh:mm:ss');
      }),
    });
  };

  return (
    <AppForm>
      <Form onSubmit={onSubmit} initialValues={initialValues} />
    </AppForm>
  );
}
