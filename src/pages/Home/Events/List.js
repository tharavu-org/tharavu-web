import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Event from './Event';

export default function List() {
  const dispatch = useDispatch();
  const rows = useSelector(state => state.event.events);

  useEffect(() => {
    dispatch({ type: 'GET_EVENTS' });
  }, [dispatch]);

  return rows.map((e, i) => {
    return <Event key={i.toString()} event={e} />;
  });
}
