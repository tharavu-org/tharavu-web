import React from 'react';
import { useSelector } from 'react-redux';
import { Alert } from '@material-ui/lab';

import Event from '../../../components/app/Event';
import AppPagination from '../../../components/lib/AppPagination';

export default function List() {
  const rows = useSelector((state) => state.event.events);

  const renderEvents = rows.map((e, i) => {
    return <Event key={i.toString()} event={e} />;
  });

  return (
    <>
      {rows.length > 0 ? (
        renderEvents
      ) : (
        <Alert severity="info">No events found</Alert>
      )}
      <AppPagination actionType="FILTER_EVENTS" />
    </>
  );
}
