import React, { Component } from 'react';
import api from '../utils/api';

export default class FirstPage extends Component {

  async componentDidMount() {
    const message = await api.getHelloMessage();
    console.log(message);
  }

  render() {
    return (
      <div>
        <h1>FirstPage</h1>
      </div>
    );
  }
}
