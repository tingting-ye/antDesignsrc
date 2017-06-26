/**
 *  轮播图左右切换
 */
import React,{Component} from 'react'
import 'antd/dist/antd.css'

export default class index extends Component{

  handleArrowClick(option) {
    this.props.turn(option);
  }

  render() {
    return (
      <div className="slider-arrows-wrap">
        <span
          className="slider-arrow slider-arrow-left"
          onClick={this.handleArrowClick.bind(this, -1)}>
          &lt;
        </span>
        <span
          className="slider-arrow slider-arrow-right"
          onClick={this.handleArrowClick.bind(this, 1)}>
          &gt;
        </span>
      </div>
    );
  }
}