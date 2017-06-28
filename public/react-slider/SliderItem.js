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
    const {data,nowLocal,sliderIndex,isShowNum} = this.props
    const width = 100 / isShowNum+'%'
    const compareArr = []
    for(let i=0;i<isShowNum;i++){
      const index = i+ nowLocal
      compareArr.push(index)
    }
    return (
      <li className={ compareArr.indexOf(sliderIndex)>=0 ? "slider_item active":"slider_item hidden"} style={{width:width}}>{data.content}</li>
    );
  }
}