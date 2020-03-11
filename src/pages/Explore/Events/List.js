import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import Event from '../../../components/app/Event';

import AppPagination from '../../../components/lib/AppPagination';

export default function List() {
  const dispatch = useDispatch();
  const rows = useSelector(state => state.event.events);
  const urlParams = useParams();

  useEffect(() => {
    dispatch({
      type: 'SEARCH_EVENTS',
      payload: { page: 1, name: urlParams.tagName },
    });
  }, [dispatch, urlParams]);

  const events = rows.map((e, i) => {
    return <Event key={i.toString()} event={e} />;
  });

  return (
    <>
      {events}
      <AppPagination actionType="GET_EVENTS" />
    </>
  );
}
