import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import configureStore from './redux/configureStore';
import Routes from './routes';
import fingerprint from './utils/fingerprint';

const store = configureStore();
const theme = createMuiTheme();

export default function App() {
  useEffect(() => {
    async function getFingerPrint() {
      const data = await fingerprint();
      console.log(data);
    }
    getFingerPrint();
  });

  return (
    <Provider store={store}>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <ThemeProvider theme={theme}>
          <Routes />
        </ThemeProvider>
      </MuiPickersUtilsProvider>
    </Provider>
  );
}
