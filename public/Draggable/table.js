import React, { Component } from 'react'
import { Button, Popconfirm } from 'antd'
import Draggable from 'react-draggable'

export default class index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      //是否在拖拽文字
      activeArr: {},
      //文字被拖拽到什么位置
      textArr: {}
    }
    this.onStart = this.onStart.bind(this)
    this.onStop = this.onStop.bind(this)
    this.handleDrag = this.handleDrag.bind(this)
  }

  onStart(e, ui) {
    const { activeArr } = this.state
    const id = ui.node.id
    const checked = activeArr[`activeDrag${id}`] = true
    this.setState({})
  }

  onStop(e, ui) {
    const { activeArr } = this.state
    const id = ui.node.id
    const checked = activeArr[`activeDrag${id}`] = false
    this.setState({})
  }

  handleDrag(e, ui) {
    const { textArr } = this.state
    const id = ui.node.id
    const locArr = textArr[`deltaPosition${id}`] || {}
    const x = locArr.x || 0
    const y = locArr.y || 0
    const params = {
      x: (x + ui.deltaX),
      y: (y + ui.deltaY)
    }
    textArr[`deltaPosition${id}`] = params
    this.setState({})
  }

  render() {
    const { activeArr, textArr } = this.state
    const dragHandlers = { onStart: this.onStart, onStop: this.onStop }
    return (
      <div className="page">
        <div className="page-content">
          <div className="draggable-box">
            <div className="draggable-content">
              <Draggable bounds="parent" onDrag={this.handleDrag} {...dragHandlers}>
                <div className="draggable-text box" id="1">有本事拽我呀1<br />
                  x:{textArr["deltaPosition1"] ? textArr["deltaPosition1"].x : 0} && y:{textArr["deltaPosition1"] ? textArr["deltaPosition1"].y : 0}
                </div>
              </Draggable>
              <Draggable bounds="parent" onDrag={this.handleDrag} {...dragHandlers}>
                <div className="draggable-text box" id="2">有本事拽我呀2<br />
                  x:{textArr["deltaPosition2"] ? textArr["deltaPosition2"].x : 0} && y:{textArr["deltaPosition2"] ? textArr["deltaPosition2"].y : 0}
                </div>
              </Draggable>
            </div>
          </div>
        </div>
      </div>
    );
  }
}