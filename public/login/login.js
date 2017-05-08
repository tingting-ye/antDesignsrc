
import React,{Component} from 'react'
import {Link} from 'react-router'
import 'antd/dist/antd.css'
import '../css/index.css'

export default class index extends Component{
    render() {
        return (
            <Link to={`/homepage`}>登录</Link>
        );
    }
}