import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Sidebar from './Sidebar';
import Dashboard from './Dashboard';
import PageNotFound from '../PageNotFound';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'grid',
    gridTemplateColumns: '200px auto',
    height: '100%',
  },
  content: {
    padding: theme.spacing(2),
  },
}));

export default function Member() {
  const classes = useStyles();
  const [menu, setMenu] = useState('dashboard');

  const renderContent = () => {
    switch (menu) {
      case 'dashboard':
        return <Dashboard />;

      default:
        return <PageNotFound />;
    }
  };

  return (
    <div className={classes.container}>
      <div className={classes.sidebar}>
        <Sidebar menu={menu} onMenuChange={setMenu} />
      </div>
      <div className={classes.content}>{renderContent()}</div>
    </div>
  );
}
