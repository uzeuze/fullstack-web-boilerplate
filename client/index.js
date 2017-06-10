import React, { Component } from 'react';
import { render } from 'react-dom';
import api from './utils/api';

import './index.scss';

class App extends Component {

  async componentDidMount() {
    const message = await api.getHelloMessage();
    console.log(message);
  }

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
