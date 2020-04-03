import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Event from '../../../components/app/Event';
import AppPagination from '../../../components/lib/AppPagination';

export default function List({ live }) {
  const dispatch = useDispatch();
  const rows = useSelector((state) => state.event.events);

  useEffect(() => {
    dispatch({
      type: 'GET_EVENTS',
      payload: { page: 1, query: { is_live_true: live } },
    });
    return () => {
      dispatch({ type: 'RESET_EVENTS' });
    };
  }, [dispatch, live]);

  const events = rows.map((e, i) => <Event key={i.toString()} event={e} />);

  return (
    <>
      {events}
      <AppPagination query={{ is_live_true: live }} actionType="GET_EVENTS" />
    </>
  );
}
