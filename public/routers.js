import React from 'react'
import { Route,IndexRoute } from 'react-router'
import Login from './login/login'
import Welcome from './welcome/welcome'
import Homepage from './homePage/homepage'
import Hangzhou from './hangzhou/hangzhou'

const routers = (
    <Route path="/" component={Login}>
        <IndexRoute component={Welcome}/>
        <Route path="/homepage" component={Homepage}/>
        <Route path="/hangzhou" component={Hangzhou}/>
    </Route>
)
export default routers;