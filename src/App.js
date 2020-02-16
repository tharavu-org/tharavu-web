import React from 'react';
import { Provider } from 'react-redux';

import configureStore from './redux/configureStore';
import Routes from './routes';

const store = configureStore();

export default function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}
