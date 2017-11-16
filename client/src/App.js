import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import MovieList from './components/MovieList'

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
      <Router>
        <div className="App">
          <Header />
          <Footer />
          <Route path="/" component={Home} />
          <Route exact path='/movies' render={() => <MovieList auth={this.state.auth} />} />
        </div>
      </Router>
    );
  }
}

export default App;
