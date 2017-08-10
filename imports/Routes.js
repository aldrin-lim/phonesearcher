/**
 * @author Aldrin Lim
 * Routing for the App
 */

import React, { Component } from 'react';
import { browserHistory, IndexRoute, Router, Route } from 'react-router';
import { Provider } from 'react-redux'; 
import { createStore } from 'redux';
import { render } from 'react-dom';
import MainLayout from './layout/MainLayout';
import SearchPhone from './views/Search';
import PhoneDetail from './views/PhoneDetail';
import Reducer from './reducer';

// Redux Store
const store = createStore(Reducer);

const DefaultRoutes = (
  <Provider store={store}>
    <Router history={browserHistory}>
        <Route path="/" component={MainLayout}>
          <IndexRoute component={SearchPhone} />
          <Route path="phone/:id" component={PhoneDetail} />
        </Route>
    </Router>
  </Provider>
);

render((
 DefaultRoutes
), document.getElementById('render-target'));