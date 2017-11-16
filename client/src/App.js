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

  logout(){
    fetch('/api/auth/logout', {
      credentials: 'include',
    }).then(res => res.json())
    .then(res => {
      this.setState({
        auth: res.auth,
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
          <Route exact path="/login" render={() => (
            this.state.auth
            ? <Redirect to="/dashboard" />
            : <Login handleLoginSubmit={this.handleLoginSubmit} />
          )} />
          <Route exact path="/dashboard" render={() => (
            !this.state.auth
            ? <Redirect to="/login" />
            : <Dashboard user={this.state.user} />
          )} />
          <Route exact path="/register" render={() => (
            this.state.auth
            ? <Redirect to="/dashboard" />
            : <Register handleRegisterSubmit={this.handleRegisterSubmit} />
          )} />
        </div>
      </Router>
    );
  }

}

export default App;
