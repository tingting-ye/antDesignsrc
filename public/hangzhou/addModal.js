/**
 * Created by Administrator on 2017/6/19.
 */

import React,{ Component } from 'react'
import {Button , Modal} from 'antd'
import 'antd/dist/antd.css'
import '../css/index.css'

export default class index extends Component {
  constructor(props){
    super(props)
    this.state={

    }
  }

  // 组件加载前调用一次,如果该函数内调用setState,本次的render函数可以看到更新后的state,并且只渲染一次
  componentWillMount() {
    debugger
  }

  // 组件加载后调用一次。这个时候子组件也加载好了，可以使用refs
  componentDidMount() {
  }

  // props是父组件传递给子组件的。父组件发生render的时候子组件就会调用（不管是否更新）
  componentWillReceiveProps(nextProps){
  }

  render(){
    return (
      <Modal
        title="Basic Modal"
        visible={this.props.visible}
        onOk={this.props.onOk}
        onCancel={this.props.onCancel}
      >
        <p>啥</p>
      </Modal>
    )
  }
}
