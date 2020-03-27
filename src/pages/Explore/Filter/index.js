import React, { useEffect, useCallback } from 'react';
import produce from 'immer';
import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';
import { format, parseISO } from 'date-fns';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';

import Form from './Form';

const useStyles = makeStyles((theme) => ({
  paper: {
    height: `calc(100% - ${theme.spacing(4)}px)`,
    padding: theme.spacing(2),
    overflowY: 'auto',
  },
}));

export default function Filter() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const location = useLocation();
  const queryObj = queryString.parse(location.search, { arrayFormat: 'comma' });
  const createTags = (items) => {
    if (typeof items === 'string') {
      return [{ name: items }];
    }
    return [];
  };
  const initialValues = {
    tags: createTags(queryObj.tags),
    locationTags: createTags(queryObj.locationTags),
    startDate: queryObj.startDate ? parseISO(queryObj.startDate) : null,
    endDate: queryObj.startDate ? parseISO(queryObj.startDate) : null,
  };

  const getTagNames = (tags) => {
    return tags.map((t) => t.name);
  };

  const handleSubmit = useCallback(
    (values) => {
      const finalValues = produce(values, (draftState) => {
        draftState.tharavuTagsNameEqAny = getTagNames(values.tags);
        draftState.locationTagsNameEqAny = getTagNames(values.locationTags);
        if (values.startDate && values.endDate) {
          draftState.periodBetween = [
            format(values.startDate, 'yyyy-MM-dd'),
            format(values.endDate, 'yyyy-MM-dd'),
          ];
        }
        delete draftState.tags;
        delete draftState.locationTags;
      });
      dispatch({ type: 'FILTER_EVENTS', payload: finalValues });
    },
    [dispatch],
  );

  useEffect(() => {
    handleSubmit(initialValues);
  }, [initialValues, handleSubmit]);

  return (
    <Paper className={classes.paper}>
      <Form initialValues={initialValues} onSubmit={handleSubmit} />
    </Paper>
  );
}
