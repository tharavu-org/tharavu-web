import React from 'react';
import { useDispatch } from 'react-redux';
import produce from 'immer';
import { format, parseISO } from 'date-fns';
import { without } from 'ramda';

import AppForm from '../../../components/lib/form/AppForm';
import Form from './Form';

export default function Edit({ event }) {
  const dispatch = useDispatch();

  const tryParseISO = (obj) => {
    if (typeof obj === 'string') {
      return parseISO(obj);
    }

    return obj;
  };

  const getTagsAttributes = (newTags, eventTags) => {
    let removedItems = without(newTags, eventTags);
    removedItems = removedItems.map((i) => {
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

  const getNumerals = (newNumerals, eventNumerals) => {
    let removedItems = without(newNumerals, eventNumerals);
    removedItems = removedItems.map((i) => {
      const obj = { _destroy: true };
      return { ...obj, ...i };
    });
    return [...newNumerals, ...removedItems];
  };

  const onSubmit = (values) => {
    const payload = produce(values, (draftState) => {
      draftState.tharavuEventTagsAttributes = getTagsAttributes(
        values.tags,
        event.tags,
      );
      draftState.tharavuEventTagNumeralsAttributes = getNumerals(
        values.numerals,
        event.numerals,
      );
      draftState.tharavuEventTagNumeralsAttributes = draftState.tharavuEventTagNumeralsAttributes.map(
        (item) => ({ ...item, tharavuTagId: item.tag.id }),
      );
      draftState.tharavuEventLocationTagsAttributes = getTagsAttributes(
        values.locationTags,
        event.locationTags,
      );
      draftState.startDate = format(
        tryParseISO(values.startDate),
        'yyyy-MM-dd',
      );
      draftState.endDate = format(tryParseISO(values.endDate), 'yyyy-MM-dd');
      draftState.startsAt = format(tryParseISO(values.startsAt), 'hh:mm:ss');
      draftState.endsAt = format(tryParseISO(values.endsAt), 'hh:mm:ss');
    });
    dispatch({
      type: 'UPDATE_EVENT',
      payload,
    });
  };

  return (
    <AppForm>
      <Form onSubmit={onSubmit} initialValues={event} edit />
    </AppForm>
  );
}
