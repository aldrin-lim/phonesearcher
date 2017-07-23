import React, { Component } from 'react';
import { browserHistory, Route, Router } from 'react-router';
import { render } from 'react-dom';
import MainLayout from './layout/MainLayout';
import SearchPhone from './views/Search';

const DefaultRoutes = (
    <Router history={browserHistory}>
        <Route path="/" component={MainLayout}>
            <Route path="/" component={SearchPhone} />
        </Route>
    </Router>
);

render((
 DefaultRoutes
), document.getElementById('render-target'));