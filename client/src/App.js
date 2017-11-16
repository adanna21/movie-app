import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';

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
