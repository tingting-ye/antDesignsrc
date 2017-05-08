/**
 * Created by tingting on 2017/5/3.
 */
import React,{Component} from 'react'
import {Link} from 'react-router'
import 'antd/dist/antd.css'
import '../css/index.css'

export default class index extends Component{
    render() {
        return (
            <Link to={`/hangzhou`}>首页</Link>
        );
    }
}