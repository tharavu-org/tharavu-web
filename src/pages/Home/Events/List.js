import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Event from '../../../components/app/Event';
import AppPagination from '../../../components/lib/AppPagination';

export default function List() {
  const dispatch = useDispatch();
  const rows = useSelector((state) => state.event.events);

  useEffect(() => {
    dispatch({ type: 'GET_EVENTS', payload: { page: 1 } });
    return () => {
      dispatch({ type: 'RESET_EVENTS' });
    };
  }, [dispatch]);

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
