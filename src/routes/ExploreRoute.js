/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Route } from 'react-router-dom';
import ExploreLayout from '../layouts/ExploreLayout';

export default ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={matchProps => (
      <ExploreLayout>
        <Component {...matchProps} />
      </ExploreLayout>
    )}
  />
);
