import React, { useEffect } from 'react';
import { Box, Typography } from '@material-ui/core';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import { useDispatch, useSelector } from 'react-redux';
import Icon from '@mdi/react';
import { mdiChevronRight } from '@mdi/js';
import { format } from 'date-fns';
import { Alert } from '@material-ui/lab';

import Event from '../../../components/app/Event';
import AppPagination from '../../../components/lib/AppPagination';

export default function TodayEvents() {
  const location = useLocation();
  const queryObj = queryString.parse(location.search, { arrayFormat: 'comma' });
  const dispatch = useDispatch();
  const events = useSelector((state) => state.event.todayEvents);
  const todayDate = format(new Date(), 'Y-MM-dd');

  useEffect(() => {
    dispatch({
      type: 'GET_TODAY_EVENTS',
      payload: {
        page: 1,
        query: { category: queryObj.category, start_date: todayDate },
      },
    });
  }, [dispatch, queryObj.category, todayDate]);

  const renderEvents = events.map((e, i) => (
    <Event key={i.toString()} event={e} />
  ));

  return (
    <Box p={3} minHeight="calc(100vh - 50px)">
      <Typography variant="h4" color="primary">
        <Box display="flex" alignItems="center">
          <Icon path={mdiChevronRight} size={2} />
          TODAY
          <Icon path={mdiChevronRight} size={2} />
          {queryObj.category.toUpperCase()}
        </Box>
      </Typography>
      <Box px={3}>
        {events.length === 0 ? (
          <Box mt={3}>
            <Alert severity="warning">No events found</Alert>
          </Box>
        ) : (
          renderEvents
        )}
        <AppPagination
          query={{ category: queryObj.category, start_date: todayDate }}
          actionType="GET_TODAY_EVENTS"
        />
      </Box>
    </Box>
  );
}
