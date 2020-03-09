import React from 'react';
import { useDispatch } from 'react-redux';
import produce from 'immer';
import { format, parseISO } from 'date-fns';
import { without } from 'ramda';

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

  const getTagsAttributes = newTags => {
    let removedItems = without(newTags, event.tags);
    removedItems = removedItems.map(i => {
      const obj = { _destroy: true };
      return { ...obj, ...i };
    });
    const objects = newTags.map((item, index) => {
      let tag = {
        position: index,
      };
      if (item.tharavuTagId) {
        tag = { ...tag, id: item.id, tharavuTagId: item.tharavuTagId };
      } else {
        tag = { ...tag, tharavuTagId: item.id };
      }
      return tag;
    });
    return [...objects, ...removedItems];
  };

  const onSubmit = values => {
    dispatch({
      type: 'UPDATE_EVENT',
      payload: produce(values, draftState => {
        const tharavuEventTagsAttributes = getTagsAttributes(values.tags);
        draftState.tharavuEventTagsAttributes = tharavuEventTagsAttributes;
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
