/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Route } from 'react-router-dom';
import BasicLayout from '../layouts/Basic';

export default ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={matchProps => (
      <BasicLayout>
        <Component {...matchProps} />
      </BasicLayout>
    )}
  />
);
