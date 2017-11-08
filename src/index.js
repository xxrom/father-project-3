import React from 'react';
import ReactDOM from 'react-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import App from './App';

const renderApp = () => {
  return (
    <MuiThemeProvider>
      <App />
    </MuiThemeProvider>
  );
}

ReactDOM.render(renderApp(), document.getElementById('root'));

if (module.hot) {
  module.hot.accept('./App', () => {
    ReactDOM.render(renderApp(),
      document.getElementById('root'),
    )
  })
}
