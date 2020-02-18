import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Sidebar from './Sidebar';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'grid',
    gridTemplateColumns: '200px auto',
    height: '100%',
  },
  sidebar: {
    overflowY: 'scroll',
  },
  content: {
    padding: theme.spacing(2),
  },
}));

export default function Member() {
  const classes = useStyles();
  const [menu, setMenu] = useState('dashboard');

  return (
    <div className={classes.container}>
      <div className={classes.sidebar}>
        <Sidebar menu={menu} onMenuChange={setMenu} />
      </div>
      <div className={classes.content}>
        <div>Content</div>
      </div>
    </div>
  );
}
