import React from 'react';
import { makeStyles, Box } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  box: {
    color: '#fff',
    backgroundColor: '#17a2b8',
    display: 'inline-block',
    fontSize: '75%',
    fontWeight: '700',
    lineHeight: '1',
    textAlign: 'center',
    whiteSpace: 'nowrap',
    verticalAlign: 'baseline',
    borderRadius: '.25rem',
    marginTop: theme.spacing(3),
    padding: theme.spacing(0.5),
  },
}));

export default function TextBadge({ text }) {
  const classes = useStyles();

  return <Box className={classes.box}>{text}</Box>;
}
