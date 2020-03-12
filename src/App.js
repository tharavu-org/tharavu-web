import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import store from './redux/configureStore';
import Routes from './routes';
import logUser from './utils/logUser';

const theme = createMuiTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#0074D9',
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
  },
});

export default function App() {
  useEffect(() => {
    if (!sessionStorage.getItem('userAccessLog')) {
      logUser();
    }
  }, []);

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
