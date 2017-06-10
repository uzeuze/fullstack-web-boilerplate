import React, { Component } from 'react';
import { render } from 'react-dom';

import Router from './Router';
import './index.scss';

class App extends Component {
  render() {
    return (
      <div>
        <Router />
      </div>
    );
  }
}

render(
  <App />,
  document.getElementById('container')
);
