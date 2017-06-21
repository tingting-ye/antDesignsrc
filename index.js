import React from 'react';
import ReactDOM from 'react-dom';
import { Router,hashHistory } from 'react-router'
// 路由集合
import routers from './public/routers'
import './public/css/index.css'
ReactDOM.render(
    (
        <Router history={hashHistory}>
            {routers}
        </Router>
    ),
    document.getElementById('example')
);