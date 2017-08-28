import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Home from './home/home.js'
import notFound from './notFound'
import { draggableText, draggableTable } from './Draggable'
import { defaultCarousel } from './carousel'
const routers = (
  <Route>
    <Route path="/" component={Home}>
      {/*拖拽功能*/}
      <Route path="/draggable/text" component={draggableText} />
      <Route path="/draggable/table" component={draggableTable} />
      {/*轮播图*/}
      <Route path="/carousel/default" component={defaultCarousel} />
      {/*无模块*/}
      <Route path="*" component={notFound} />
    </Route>
  </Route>
)
export default routers