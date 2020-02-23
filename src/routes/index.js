import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import AppRoute from './AppRoute';
import Home from '../pages/Home';
import PageNotFound from '../pages/PageNotFound';
import Member from '../pages/Member';
import ContactUs from '../pages/ContactUs';

export default function Routes() {
  return (
    <Router>
      <Switch>
        <AppRoute exact path="/" component={Home} />
        <AppRoute exact path="/contact-us" component={ContactUs} />
        <AppRoute exact path="/accounts/member" component={Member} />
        <AppRoute component={PageNotFound} />
      </Switch>
    </Router>
  );
}
