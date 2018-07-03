import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import { Switch } from 'react-router';
import './App.css';

import HomePage from './containers/HomePage';
import Products from './containers/Products';
import NotFound from './components/NotFound';

class App extends Component {
  render() {
    return (
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
    );
  }
}

export default App;
