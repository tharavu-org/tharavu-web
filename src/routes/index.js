import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import AppRoute from './AppRoute';
import Home from '../pages/Home';
import PageNotFound from '../pages/PageNotFound';

export default function Routes() {
  return (
    <Router>
      <Switch>
        <AppRoute exact path="/" component={Home} />
        <AppRoute component={PageNotFound} />
      </Switch>
    </Router>
  );
}
