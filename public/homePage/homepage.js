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

        }
    }
    render() {
        return (
            <div className="slider_map">
                <Slider
                // 存放图片信息
                  item={}
                />
            </div>
        );
    }
}