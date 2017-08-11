import React, { Component } from 'react'
import Draggable from 'react-draggable'

export default class index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: false,
      contion: false,
    }
    this.confirm = this.confirm.bind(this)
    this.cancel = this.cancel.bind(this)
    this.onStart = this.onStart.bind(this)
    this.onStop = this.onStop.bind(this)
  }

  confirm() {
    alert("chenggong")
  }
  cancel() {
    alert("quxiao")
  }

  handleVisibleChange(visible, state) {
    if (!visible) {
      this.setState({ visible })
      return
    }
    if (state) {
      this.confirm()
    }
  }

  onStart() {
    this.setState({activeDrags: ++this.state.activeDrags});
  }

  onStop() {
    this.setState({activeDrags: --this.state.activeDrags});
  }


  render() {
    const dragHandlers = {onStart: this.onStart, onStop: this.onStop};
    return (
      <div className="page">
        <Draggable {...dragHandlers}>
          <span className="box">I can be dragged anywhere</span>
        </Draggable>
      </div>
    );
  }
}