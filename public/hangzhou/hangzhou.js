/**
 * Created by tingting on 2017/5/3.
 */
import React, {Component} from 'react'
import {Button,Modal} from 'antd'
import AddModal from './addModal'
import 'antd/dist/antd.css'
import '../css/index.css'

export default class index extends Component {
  // 构造函数，在创建组建的时候调用一次
  constructor(props) {
    super(props)
    this.state = {
      visible: false
    }
    // ()=>this.addButton() 同效果
    // this.addButton = this.addButton.bind(this)
    // 确认
    this.handleOk = this.handleOk.bind(this)
    // 取消
    this.handleCancel = this.handleCancel.bind(this)
  }

  // 组件加载前调用一次,如果该函数内调用setState,本次的render函数可以看到更新后的state,并且只渲染一次
  componentWillMount() {
    alert("componentWillMount")
  }

  // 组件加载后调用一次。这个时候子组件也加载好了，可以使用refs
  componentDidMount() {
    alert("componentDidMount")
  }

  // 组件挂载之后，每次调用setState都会调用shouldComponentUpdate判断时候需要重新渲染组件。默认返回true
  shouldComponentUpdate(nextProps,nextState){
    alert("shouldComponentUpdate")
    return true
  }

  // props是父组件传递给子组件的。父组件发生render的时候子组件就会调用（不管是否更新）
  componentWillReceiveProps(nextProps){
    alert("componentWillReceiveProps")
  }

  // shouldComponentUpdate返回true或者调用forceUpdate之后，componentWillUpadate会被调用
  componentWillUpdate(){
    alert("componentWillUpdate")
  }

  // 除了首次调用componentDidMount,其他render结束后都是调用componentDidUpdate
  componentDidUpdate(){
    alert("componentDidUpdate")
  }

  // 组件被卸载的时候调用，一般在componentDidMount里面注册的事件需要在这里删除
  componentWillUnmount() {
    alert("componentWillUnmount")
  }

  addButton() {
    this.setState({
      visible:true
    })
  }

  handleOk(){
    this.setState({
      visible:false
    })
  }

  handleCancel(){
    this.setState({
      visible:false
    })
  }

  render() {
    alert("render")
    return (
      <div>
        <Button onClick={()=>this.addButton()}>点击</Button>
        {/*
          this.state.visible ? (
            <AddModal
              visible={this.state.visible}
              onOk={this.handleOk}
              onCancel={this.handleCancel}
            />
          ):null
        */}
      </div>
    );
  }
}