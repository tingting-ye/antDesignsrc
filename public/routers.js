import React from 'react'
import { Route,IndexRoute } from 'react-router'
import Architecture from './containers/architecture.js'
import Datasheet from './datasheet/datasheet'
import Login from './login/login'
import Welcome from './welcome/welcome'
import Hangzhou from './hangzhou/hangzhou'
import Homepage from './homePage/homepage'
import text_buttom from './text/button'

const routers = (
    <Route path="/" component={text_buttom}>
        {/*<IndexRoute component={Welcome}/>*/}
        {/*<Route path="/homepage" component={Hangzhou}/>*/}
        {/*<Route path="/hangzhou" component={Datasheet}/>*/}
        {/*<Route path="/login" component={Login}/>*/}
    </Route>
)
export default routers;