/**
 * Created by tingting on 2017/5/3.
 */
import React, { Component } from 'react'
import { Button, Popconfirm } from 'antd'
import Draggable from 'react-draggable'

export default class index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeDrags:0,//是否在拖拽文字
      deltaPosition: { // 默认初始化
        x: 0, y: 0
      },
    }
    this.onStart = this.onStart.bind(this)
    this.onStop = this.onStop.bind(this)
    this.handleDrag = this.handleDrag.bind(this)
  }

  onStart() {
    this.setState({activeDrags: ++this.state.activeDrags});
  }

  onStop() {
    this.setState({activeDrags: --this.state.activeDrags});
  }

  handleDrag(e, ui) {
    const {x, y} = this.state.deltaPosition;
    this.setState({
      deltaPosition: {
        x: x + ui.deltaX,
        y: y + ui.deltaY,
      }
    });
  }

  render() {
    const {deltaPosition,activeDrags} = this.state
    const dragHandlers = {onStart: this.onStart, onStop: this.onStop}
    return (
      <div className="page">
        <div className="page-content">
          <div className="draggable-box">
            <div className="draggable-content">
              <Draggable bounds="parent" onDrag={this.handleDrag} {...dragHandlers}>
                <div className="draggable-text box">{activeDrags===1?"快放开我":"有本事拽我呀"}<br/>x: {deltaPosition.x.toFixed(0)}, y: {deltaPosition.y.toFixed(0)}</div>
              </Draggable>
            </div>
          </div>
        </div>
      </div>
    );
  }
}