import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';

import Routes from './routes';

const themeInstance = {};

export default function App() {
  return (
    <ThemeProvider theme={themeInstance}>
      <Routes />
    </ThemeProvider>
  );
}
