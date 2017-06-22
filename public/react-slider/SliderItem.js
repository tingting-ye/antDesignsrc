/**
 *  轮播图图片
 */
import React,{Component} from 'react'
import 'antd/dist/antd.css'

export default class index extends Component{
  render() {
    const {data}=this.props
    return (
      <li  className="slider_item"><img src={data.src}/></li>
    );
  }
}