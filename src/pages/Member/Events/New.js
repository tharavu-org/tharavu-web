import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import produce from 'immer';
import { format } from 'date-fns';

import AppForm from '../../../components/lib/form/AppForm';
import Form from './Form';

export default function New() {
  const { currentUser } = useSelector((state) => state.session);
  const dispatch = useDispatch();

  const dateTime = new Date();
  dateTime.setHours(0, 0, 0);

  const initialValues = {
    createdById: currentUser.id,
    tags: [],
    locationTags: [],
    relationTags: [],
    startDate: dateTime,
    endDate: dateTime,
    startsAt: dateTime,
    endsAt: dateTime,
  };

  const getTagsWithPosition = (tags) => {
    return tags.map((item, index) => ({
      tharavuTagId: item.id,
      position: index,
      name: item.name,
    }));
  };

  const onSubmit = (values) => {
    const payload = produce(values, (draftState) => {
      draftState.tharavuEventTagsAttributes = getTagsWithPosition(values.tags);
      if (values.numerals) {
        values.numerals.forEach((item) => {
          const tagIndex = draftState.tharavuEventTagsAttributes.findIndex(
            (element) =>
              element.name.toLowerCase() === item.tagName.toLowerCase(),
          );
          if (tagIndex !== -1) {
            draftState.tharavuEventTagsAttributes[tagIndex] = {
              ...draftState.tharavuEventTagsAttributes[tagIndex],
              ...item,
            };
          }
        });
      }
      draftState.tharavuEventLocationTagsAttributes = getTagsWithPosition(
        values.locationTags,
      );
      draftState.tharavuEventRelationTagsAttributes = getTagsWithPosition(
        values.relationTags,
      );
      draftState.startDate = format(values.startDate, 'yyyy-MM-dd');
      draftState.endDate = format(values.endDate, 'yyyy-MM-dd');
      draftState.startsAt = format(values.startsAt, 'hh:mm:ss');
      draftState.endsAt = format(values.endsAt, 'hh:mm:ss');
      delete draftState.tags;
      delete draftState.locationTags;
      delete draftState.relationTags;
      delete draftState.numerals;
    });
    if (values.tags.length === 0) {
      return;
    }
    dispatch({
      type: 'CREATE_EVENT',
      payload,
    });
  };

  return (
    <AppForm>
      <Form onSubmit={onSubmit} initialValues={initialValues} />
    </AppForm>
  );
}
