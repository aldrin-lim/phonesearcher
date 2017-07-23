import React, { Component } from 'react';
import { browserHistory, IndexRoute, Router, Route } from 'react-router';
import { render } from 'react-dom';
import MainLayout from './layout/MainLayout';
import SearchPhone from './views/Search';

const DefaultRoutes = (
    <Router history={browserHistory}>
        <Route path="/" component={MainLayout}>
            <IndexRoute component={SearchPhone} />
        </Route>
    </Router>
);

render((
 DefaultRoutes
), document.getElementById('render-target'));