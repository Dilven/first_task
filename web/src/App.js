import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Switch } from 'react-router';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'
import jwt from 'jsonwebtoken';

import './App.css';
import rootReducer from './reducers/index'
import { setCurrentUser } from './actions/auth'
import HomePage from './containers/HomePage/index';
import LoginPage from './containers/LoginPage/index';
import LogoutPage from './containers/LogoutPage/index';
import RegisterPage from './containers/RegisterPage/index';
import ProfileSettingsPage from './containers/ProfileSettingsPage';
import Products from './containers/Products/index';
import NotFound from './components/NotFound';
import Navigation from './containers/Navigation/index';
import FlashMessage from './components/FlashMessage';
import setAuthorizationToken from './utils/setAuthorizationToken';
import requireAuth from './utils/requireAuth';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(thunk)
));

if(localStorage.jwtToken) {
  setAuthorizationToken(localStorage.jwtToken);
  store.dispatch(setCurrentUser(jwt.decode(localStorage.jwtToken)))
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="app">	
            <Navigation />
            <main className="main-content">
              <Switch>
                <Route exact path="/" component={HomePage}/>
                <Route path="/login" component={LoginPage} />
                <Route path="/logout" component={LogoutPage} />
                <Route path="/signup" component={RegisterPage} />
                <Route path="/settings/profile" component={requireAuth(ProfileSettingsPage)} />
                <Route exact path="/products" component={Products}/>
                <Route exact path="/products/:category" component={Products}/>
                <Route component={NotFound}/>
              </Switch>
              <FlashMessage />
            </main>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
