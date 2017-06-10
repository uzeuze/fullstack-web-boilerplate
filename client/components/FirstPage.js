import React, { Component } from 'react';
import { connect } from 'react-redux';
import api from '../utils/api';

import { toggleStatus } from '../actions';

class FirstPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: props.status
    }
  }

  async componentDidMount() {
    const message = await api.getHelloMessage();
    console.log(message);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ status: nextProps.status });
  }

  render() {
    return (
      <div>
        <h1>FirstPage</h1>
        <button onClick={() => this.props.toggleStatus()}>TOGGLE</button>
        <h6>STATUS: {this.state.status ? 'ON' : 'OFF'}</h6>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  status: state.main.status
})

export default connect(mapStateToProps, { toggleStatus })(FirstPage);
