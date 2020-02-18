import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'grid',
    gridTemplateColumns: '200px auto',
    height: '100%',
  },
  sidebar: {
    overflowY: 'scroll',
    padding: theme.spacing(2),
  },
  content: {
    padding: theme.spacing(2),
  },
}));

export default function Member() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.sidebar}>
        <div>Sidebar</div>
      </div>
      <div className={classes.content}>
        <div>Content</div>
      </div>
    </div>
  );
}
