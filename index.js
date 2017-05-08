import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router'
import Login from './public/login/login'
import Homepage from './public/homePage/homepage'
import Hangzhou from './public/hangzhou/hangzhou'
ReactDOM.render((
    <Router history={hashHistory}>
        <Route path="/" component={Login}/>
        <Route path="/homepage" component={Homepage}/>
        <Route path="/hangzhou" component={Hangzhou}/>
    </Router>
    ),
    document.getElementById('example')
);