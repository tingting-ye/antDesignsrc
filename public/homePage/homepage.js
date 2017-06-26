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
      // 判断是否自动轮播(不传默认为true)
      isAutoRun:false,
      // 是否显示左右键(不传默认为true)
      isArrows:true,
      // 是否显示底部切换点(不传默认为true)
      isDots:false,
      // 鼠标放置是否继续播放(不传默认为true)
      isPause:true,
      // 轮播速度
      speed:2,
      // 轮播等待时间
      waitTime:2,
      // 每次显示个数
      isShowNum:1,
    }
  }
  render() {
    const {dataItem,isAutoRun,isArrows,isDots,speed,waitTime,isShowNum,isPause}=this.state
    return (
      <div className="slider_map">
        <Slider
          // 存放图片信息
          item={dataItem}
          // 是否自动轮播
          isAutoRun={isAutoRun}
          // 鼠标放置是否继续播放
          isPause = {isPause}
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