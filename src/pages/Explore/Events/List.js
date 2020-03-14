import React from 'react';
import { useSelector } from 'react-redux';

import Event from '../../../components/app/Event';

import AppPagination from '../../../components/lib/AppPagination';

export default function List() {
  const rows = useSelector(state => state.event.events);

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
