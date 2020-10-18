import { ThemeProvider } from '@material-ui/core';
import React from 'react';
import { IntlProvider } from 'react-intl';
import { BrowserRouter as Router } from 'react-router-dom';

import { Routes } from './Routes';
import { theme } from './theme';

type IntlProviderProps = React.ComponentProps<typeof IntlProvider>;

export interface AppProps {
  locale: IntlProviderProps['locale'];
  messages: IntlProviderProps['messages'];
}

const App = (props: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <IntlProvider
        locale={props.locale}
        defaultLocale='en'
        messages={props.messages}
      >
        <Router>
          <Routes />
        </Router>
      </IntlProvider>
    </ThemeProvider>
  );
};

export default App;
