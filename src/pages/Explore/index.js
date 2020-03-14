import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';

import Events from './Events';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'grid',
    gridTemplateColumns: '50% 50%',
    padding: theme.spacing(3),
  },
}));

export default function Explore({ location }) {
  const dispatch = useDispatch();
  const classes = useStyles();
  const regex = /\?(\w+)=(.*)/g;
  const [, condition, value] = regex.exec(location.search);

  useEffect(() => {
    const conditionMap = { tags: 'tharavu_tags_name_eq' };
    dispatch({
      type: 'GET_EVENTS',
      payload: { page: 1, searchParams: `${conditionMap[condition]}=${value}` },
    });
  }, [dispatch, condition, value]);

  return (
    <div className={classes.container}>
      <Events />
      <div />
    </div>
  );
}
