import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import AppRoute from './AppRoute';
import Home from '../pages/Home';
import PageNotFound from '../pages/PageNotFound';
import Member from '../pages/Member';
import ContactUs from '../pages/ContactUs';
import PrivacyPolicy from '../pages/legal/PrivacyPolicy';
import LegalRoute from './LegalRoute';
import TermsOfService from '../pages/legal/TermsOfService';

export default function Routes() {
  return (
    <Router>
      <Switch>
        <AppRoute exact path="/" component={Home} />
        <AppRoute exact path="/contact-us" component={ContactUs} />
        <LegalRoute
          exact
          path="/legal/privacy-policy"
          component={PrivacyPolicy}
        />
        <LegalRoute
          exact
          path="/legal/terms-of-service"
          component={TermsOfService}
        />
        <AppRoute exact path="/accounts/member" component={Member} />
        <AppRoute component={PageNotFound} />
      </Switch>
    </Router>
  );
}
