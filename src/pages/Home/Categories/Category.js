import React from 'react';
import { Box, Paper, Typography } from '@material-ui/core';
import Icon from '@mdi/react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  box: {
    height: '100px',
    width: '150px',
    padding: theme.spacing(2),
    margin: theme.spacing(2),
    cursor: 'pointer',
  },
}));

export default function Category({ label, icon, count }) {
  const classes = useStyles();
  const history = useHistory();

  return (
    <Box
      className={classes.box}
      component={Paper}
      role="button"
      onClick={() => history.push(`/today-events?category=${label}`)}
    >
      <Box display="flex" alignItems="center" justifyContent="center">
        <Icon path={icon} size={1} />
        <Typography variant="button">&nbsp;{label}</Typography>
      </Box>
      <Box display="flex" alignItems="center" justifyContent="center" mt={2}>
        <Typography variant="h4">{count || 0}</Typography>
      </Box>
    </Box>
  );
}
