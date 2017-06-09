import React, { Component } from 'react';
import { render } from 'react-dom';

import './index.css';

class App extends Component {
  render() {
    return (
      <div>
        <h1>HELLO MERN</h1>
      </div>
    );
  }
}

render(
  <App />,
  document.getElementById('container')
);
