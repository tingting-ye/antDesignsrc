/**
 *  图片轮播组件
 */
import React,{Component} from 'react'
import 'antd/dist/antd.css'
import SliderItem from './SliderItem'
import SliderArrows from './SliderArrows'
import SliderDots from './SliderDots'

export default class index extends Component{
  constructor(props){
    super(props)
    this.state={}
  }

  render() {

    // 获取子集
    const itemNodes = this.props.item.map((item,i)=>{
      return (
        <SliderItem data={item} key={"item"+i} count={this.props.item.length}/>
      )
    })

    return (
      <div className="slider_bg">
        <ul className="sliderItem">
          {itemNodes}
        </ul>
        {this.props.isArrows ? <SliderArrows/>:null}
        {this.props.isDots ? <SliderDots/>:null}
      </div>
    );
  }
}