import React from 'react';
import produce from 'immer';
import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';
import { format } from 'date-fns';

import Form from './Form';

const useStyles = makeStyles(theme => ({
  paper: {
    height: `calc(100% - ${theme.spacing(4)}px)`,
    padding: theme.spacing(2),
    overflowY: 'auto',
  },
}));

export default function Filter() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const initialValues = {
    tags: [],
    locationTags: [],
    startDate: null,
    endDate: null,
  };

  const getTagNames = tags => {
    return tags.map(t => t.name);
  };

  const handleSubmit = values => {
    const finalValues = produce(values, draftState => {
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
  };

  return (
    <Paper className={classes.paper}>
      <Form initialValues={initialValues} onSubmit={handleSubmit} />
    </Paper>
  );
}
