import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import jwt_decode from 'jwt-decode';
import setAuthToken from './setAuthToken';
import { setCurrentUser, logoutUser } from './actions/authentication';

import Navbar from './components/Navbar';
import Register from './components/Register';
import Login from './components/Login';
import Footer from './components/Footer'
import Entry from './components/Entry'
import List from './components/List'
import Archive from './components/Archive'
import Post from './components/Post'

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'

if(localStorage.jwtToken) {
  setAuthToken(localStorage.jwtToken);
  const decoded = jwt_decode(localStorage.jwtToken);
  store.dispatch(setCurrentUser(decoded));

  const currentTime = Date.now() / 1000;
  if(decoded.exp < currentTime) {
    store.dispatch(logoutUser());
    window.location.href = '/login'
  }
}

class App extends Component {
  render() {
    return (
      <Provider store = { store }>
        <Router>
            <div>
              <Navbar />
              <Route exact path="/" component={ Archive } />
              <div className="container">
                <Route exact path="/register" component={ Register } />
                <Route exact path="/login" component={ Login } />
                <Route exact path="/archive" component={ Archive } />
                <Route exact path="/entry" component={ Entry } />
                <Route exact path="/post" component={ Post } />
              </div>
              <Footer />
            </div>
          </Router>
        </Provider>
    );
  }
}

export default App;
