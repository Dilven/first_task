import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Switch } from 'react-router';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'
 
import './App.css';
import rootReducer from './reducers/index'

import HomePage from './containers/HomePage';
import Products from './containers/Products';
import NotFound from './components/NotFound';
import MainBar from './containers/MainBar';

const store = createStore(rootReducer, applyMiddleware(thunk));

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>	
            <MainBar/>
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
