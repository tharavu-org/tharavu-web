import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Typography, Box } from '@material-ui/core';
import Icon from '@mdi/react';
import { mdiEmail } from '@mdi/js';

const useStyles = makeStyles(theme => ({
  paper: {
    margin: theme.spacing(3),
    padding: theme.spacing(3),
  },
  heading: {
    textAlign: 'center',
  },
  icon: {
    marginRight: theme.spacing(1),
  },
}));

export default function ContactUs() {
  const classes = useStyles();
  return (
    <Paper className={classes.paper}>
      <Typography className={classes.heading} variant="h2">
        Contact Us
      </Typography>
      <Typography variant="subtitle1">
        For any queries or support, please write to us.
      </Typography>
      <Box my={3} display="flex">
        <Icon className={classes.icon} path={mdiEmail} size={1} />
        <Typography>
          <a href="mailto:info@tharavu.org">info@tharavu.org</a>
        </Typography>
      </Box>
    </Paper>
  );
}
