import React from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';

import ComponentPanel from './components/ComponentPanel/';

import './App.sass';
import theme from './theme';

/* eslint-disable jsx-filename-extension */
const App = () => (
  <MuiThemeProvider theme={theme}>
    <div className="app">
      <ComponentPanel />
    </div>
  </MuiThemeProvider>
);

export default App;
