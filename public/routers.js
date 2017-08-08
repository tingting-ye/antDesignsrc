import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Home from './home/home.js'
import { draggableText } from './Draggable'

const routers = (
  <Route>
    <Route path="/" component={Home}>
      <Route path="/draggable/text" component={draggableText} />
    </Route>
  </Route>
)
export default routers