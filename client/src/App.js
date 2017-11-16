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

  handleLoginSubmit(e, data){
    e.preventDefault();
    fetch('/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(data)
    }).then(res => res.json())
    .then(res => {
      console.log(res);
      this.setState({
        auth: res.auth,
        user: res.data.user,
      })
    }).catch(err => console.log(err));
  }

  handleRegisterSubmit(e, data){
    e.preventDefault();
    fetch('/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(data)
    }).then(res => res.json())
    .then(res => {
      console.log(res);
      this.setState({
        auth: res.auth,
        user: res.data.user,
      })
    }).catch(err => console.log(err));
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Footer />
          <Route path="/" component={Home} />
        </div>
      </Router>
    );
  }

}

export default App;
