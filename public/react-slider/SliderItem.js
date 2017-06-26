/**
 *  轮播图图片
 */
import React, {Component} from 'react'
import 'antd/dist/antd.css'

export default class index extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {data,nowLocal,sliderIndex} = this.props
    return (
      <li className={ nowLocal===sliderIndex ? "slider_item active":"slider_item hidden"}><img src={data.src}/></li>
    );
  }
}