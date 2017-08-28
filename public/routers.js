import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Home from './home/home.js'
import notFound from './notFound'
import { draggableText, draggableTable, draggableLabel } from './Draggable'
import { defaultCarousel } from './carousel'
import { datasheet } from './other'
const routers = (
  <Route>
    <Route path="/" component={Home}>
      {/*拖拽功能*/}
      <Route path="/draggable/text" component={draggableText} />
      <Route path="/draggable/table" component={draggableTable} />
      <Route path="/draggable/label" component={draggableLabel} />
      {/*轮播图*/}
      <Route path="/carousel/default" component={defaultCarousel} />

      {/*其他*/}
      <Route path="/other/datasheet" component={datasheet} />

      {/*无模块*/}
      <Route path="*" component={notFound} />
    </Route>
  </Route>
)
export default routers