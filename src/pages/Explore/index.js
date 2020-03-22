import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';

import Events from './Events';
import Filter from './Filter';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'grid',
    gridTemplateColumns: '20% auto',
    gridColumnGap: theme.spacing(2),
    padding: theme.spacing(3),
    height: `calc(100% - ${theme.spacing(6)}px)`,
  },
}));

export default function Explore({ location }) {
  const dispatch = useDispatch();
  const classes = useStyles();
  const regex = /\?(\w+)=(.*)/g;
  const [, condition, value] = regex.exec(location.search);

  useEffect(() => {
    const conditionMap = {
      tags: 'tharavu_tags_name_eq',
      location: 'location_tags_name_eq',
      startDate: 'start_date_eq',
    };
    if (conditionMap[condition]) {
      dispatch({
        type: 'GET_EVENTS',
        payload: {
          page: 1,
          searchParams: `${conditionMap[condition]}=${value}`,
        },
      });
    }
  }, [dispatch, condition, value]);

  return (
    <div className={classes.container}>
      <Filter />
      <Events />
    </div>
  );
}
