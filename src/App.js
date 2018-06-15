import React, { Component } from "react";
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';


const theme = createMuiTheme();

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div className="app">
          <p>Yo.</p>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
