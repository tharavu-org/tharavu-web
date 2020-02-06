import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';

const themeInstance = {};

export default function App() {
  return (
    <ThemeProvider theme={themeInstance}>
      <h1>தரவு</h1>
    </ThemeProvider>
  );
}
