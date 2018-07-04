import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import { Switch } from 'react-router';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'
 
import './App.css';
import rootReducer from './reducers/index'

import HomePage from './containers/HomePage';
import Products from './containers/Products';
import NotFound from './components/NotFound';

const store = createStore(rootReducer, applyMiddleware(thunk));

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>	
            <ul>
              <li>
                <NavLink to="/products">Products</NavLink>
              </li>
            </ul>
            <Switch>
              <Route exact path="/" component={HomePage}/>
              <Route path="/products" component={Products}/>
              <Route component={NotFound}/>
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
