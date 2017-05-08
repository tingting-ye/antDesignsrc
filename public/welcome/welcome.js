import React,{Component} from 'react'
import {Link} from 'react-router'
import 'antd/dist/antd.css'
import '../css/index.css'

export default class index extends Component{
    render() {
        return (
            <div>
                <Link to="/homepage">登录</Link>
                <Link to="/hangzhou">首页</Link>
                {this.props.children}
            </div>
        );
    }
}