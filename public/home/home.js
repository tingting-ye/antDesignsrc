import React, { Component } from 'react'
import { Link } from 'react-router'
import { Button, Popconfirm } from 'antd'

export default class index extends Component {
  constructor(props) {
    super(props)
  }


  render() {
    return (
      <div>
        <h3>拖拽功能</h3>
        <Link to={'/draggable/text'}>Draggable-纯文字</Link>
        <Link to=''>Draggable-表格</Link>
      </div>
    );
  }
}