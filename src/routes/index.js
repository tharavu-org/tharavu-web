import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import AppRoute from './AppRoute';
import Home from '../pages/Home';

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <AppRoute exact path="/" component={Home} />
        </Route>
      </Switch>
    </Router>
  );
}
