import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import Router from './Router';
import configureStore from './store';
import './index.scss';

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

render(
  <App />,
  document.getElementById('container')
);
