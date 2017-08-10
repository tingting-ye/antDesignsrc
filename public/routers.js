import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Home from './home/home.js'
import notFound from './notFound'
import { draggableText,draggableBorder } from './Draggable'

const routers = (
  <Route>
    <Route path="/" component={Home}>
      <Route path="/draggable/text" component={draggableText} />
      <Route path="/draggable/border" component={draggableBorder} />
      
      <Route path="*" component={notFound} />
    </Route>
  </Route>
)
export default routers