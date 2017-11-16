import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  // constructor & state
  constructor(props){
    super(props);
    this.state = {
      auth: false,
      user: null,
    }
  }

  render() {
    return (
      <div className="App">
      </div>
    );
  }
}

export default App;
