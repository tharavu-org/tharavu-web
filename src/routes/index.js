import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <h1>தரவு</h1>
        </Route>
      </Switch>
    </Router>
  );
}
