/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Route } from 'react-router-dom';
import LegalLayout from '../layouts/Legal';

export default ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={matchProps => (
      <LegalLayout>
        <Component {...matchProps} />
      </LegalLayout>
    )}
  />
);
