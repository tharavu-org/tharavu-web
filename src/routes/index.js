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
import MemberRoute from './MemberRoute';
import Explore from '../pages/Explore';
import ExploreRoute from './ExploreRoute';

export default function Routes() {
  return (
    <Router>
      <Switch>
        <AppRoute exact path="/" component={Home} />
        <ExploreRoute exact path="/explore" component={Explore} />
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
        <MemberRoute exact path="/accounts/member" component={Member} />
        <AppRoute component={PageNotFound} />
      </Switch>
    </Router>
  );
}
