/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Route } from 'react-router-dom';
import MemberLayout from '../layouts/MemberLayout';

export default ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={matchProps => (
      <MemberLayout>
        <Component {...matchProps} />
      </MemberLayout>
    )}
  />
);
