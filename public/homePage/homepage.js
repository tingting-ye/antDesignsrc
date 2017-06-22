/**
 * Created by tingting on 2017/5/3.
 */
import React,{Component} from 'react'
import 'antd/dist/antd.css'
import Slider from '../react-slider/Slider'
import '../css/Slider.css'

export default class index extends Component{
  constructor(props){
    super(props)
    this.state = {
      // 存放图片信息
      dataItem: [
        {
          src:require("../images/demo1.jpg")
        },
        {
          src:require("../images/demo2.jpg")
        },
        {
          src:require("../images/demo3.jpg")
        }
      ],
      // 判断是否自动轮播
      isAutoRun:false,
      // 是否显示左右键
      isArrows:false,
      // 是否显示底部切换点
      isDots:false,
      // 轮播速度
      speed:0,
      // 轮播等待时间
      waitTime:0,
      // 每次显示个数
      isShowNum:0,
    }
  }
  render() {
    const {dataItem,isAutoRun,isArrows,isDots,speed,waitTime,isShowNum}=this.state
    return (
      <div className="slider_map">
        <Slider
          // 存放图片信息
          item={dataItem}
          // 是否自动轮播
          isAutoRun={isAutoRun}
          // 是否显示左右键
          isArrows={isArrows}
          // 是否显示底部切换点
          isDots={isDots}
          // 轮播速度
          speed={speed}
          // 轮播等待时间
          waiting={waitTime}
          // 每次显示个数
          isShowNum={isShowNum}
        />
      </div>
    );
  }
}