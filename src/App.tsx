import { ThemeProvider } from '@material-ui/core';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { Routes } from './Routes';
import { theme } from './theme';

const App = () => (
  <ThemeProvider theme={theme}>
    <Router>
      <Routes />
    </Router>
  </ThemeProvider>
);

export default App;
