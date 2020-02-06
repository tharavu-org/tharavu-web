import React from 'react';
import { Route } from 'react-router-dom';

export default ({ component: Component, ...rest }) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <Route {...rest} render={matchProps => <Component {...matchProps} />} />
);
