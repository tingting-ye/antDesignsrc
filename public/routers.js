import React from 'react'
import { Route,IndexRoute } from 'react-router'
import Architecture from './containers/architecture.js'
import Datasheet from './datasheet/datasheet'
import Login from './login/login'
import Welcome from './welcome/welcome'
import Homepage from './homePage/homepage'
import Hangzhou from './hangzhou/hangzhou'

const routers = (
    <Route path="/" component={Hangzhou}>
        <IndexRoute component={Welcome}/>
        <Route path="/homepage" component={Homepage}/>
        <Route path="/hangzhou" component={Datasheet}/>
        <Route path="/login" component={Login}/>
    </Route>
)
export default routers;