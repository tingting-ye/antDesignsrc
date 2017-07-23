/**
 * Created by tingting on 2017/5/3.
 */
import React,{Component} from 'react'
import {Button,Popconfirm}from 'antd'

export default class index extends Component{
  constructor(props){
    super(props)
    this.state = {
      visible:false,
      contion:false,
    }
    this.confirm = this.confirm.bind(this)
    this.cancel = this.cancel.bind(this)
  }
  
  confirm(){
    alert("chenggong")
  }
  cancel(){
    alert("quxiao")
  }
  handleVisibleChange(visible,state){
    if(!visible){
      this.setState({visible})
      return
    }
    if(state){
    this.confirm()
    }
  }


  render() {
    return (
        <div>
          <Popconfirm
          title="Are you sure delete this task?"
          visible={this.state.visible}
          onVisibleChange={(visible)=>this.handleVisibleChange(visible,false)}
          onConfirm={this.confirm}
          onCancel={this.cancel}
          okText="Yes"
          cancelText="No"
          >
            <Button htmlType="reset">搜索</Button>
          </Popconfirm>
        </div>
    );
  }
}