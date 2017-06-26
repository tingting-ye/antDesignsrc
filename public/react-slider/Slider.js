/**
 *  图片轮播组件
 */
import React, {Component} from 'react'
import 'antd/dist/antd.css'
import SliderItem from './SliderItem'
import SliderArrows from './SliderArrows'
import SliderDots from './SliderDots'

export default class Slider extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // 当前显示的li
      nowLocal: 0,
    }
  }

  componentDidMount() {
    this.goPlay()
  }

  // 自动轮播
  goPlay() {
    if (this.props.isAutoRun) {
      this.autoPlayFlag = setInterval(() => {
        this.turn(1)
      }, this.props.waiting * 1000)
    }
  }

  // 暂停自动轮播
  stopPlay() {
    clearInterval(this.autoPlayFlag)
  }

  turn(n) {
    let _n = this.state.nowLocal + n
    if (_n < 0) {  // 如果当前小于0，则显示第一条
      _n = _n + this.props.item.length
    }
    if (_n >= this.props.item.length) {
      _n = _n - this.props.item.length
    }
    this.setState({
      nowLocal: _n
    })
  }

  render() {
    const count = this.props.item.length
    const nowLocal = this.state.nowLocal
    // 获取子集
    const itemNodes = this.props.item.map((item, i) => {
      return (
        <SliderItem data={item} key={"item" + i} sliderIndex={i} count={count} nowLocal={nowLocal}/>
      )
    })

    return (
      <div
        className="slider_bg"
        onMouseOver={!this.props.isPause ? null : this.stopPlay.bind(this)}
        onMouseOut={!this.props.isPause ? null : this.goPlay.bind(this)}>
        >
        <ul
          className="sliderItem"
          style={{
            // 定位显示
            // left: -600 * this.state.nowLocal + "px",
            // 最后多少秒出现切换效果
            transitionDuration: this.props.speed + "s",
            // 占的宽度
            width: 600 * this.props.item.length + 'px'
          }}
        >
          {itemNodes}
        </ul>
        {!this.props.isArrows ? null : <SliderArrows turn={this.turn.bind(this)}/>}
        {!this.props.isDots ? null : <SliderDots/>}
      </div>
    );
  }
}

Slider.autoPlayFlag = null