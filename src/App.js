import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux'
import { fetchUsers } from './actions'

class App extends Component {

  componentDidMount() {
    this.props.dispatch(fetchUsers())
  }

  render() {
    return (
      <div className="App">
        <p>{this.props.x}</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    x: state.user.name
  }

}

export default connect(mapStateToProps)(App);
