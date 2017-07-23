import React,{Component} from 'react'
import 'react-anything-sortable/sortable.css'
import { sortable } from 'react-anything-sortable'

@sortable
export default class index extends Component{
  render() {
    if(!this.props.children){
      return ""
    }
    console.log(this.props)
    return (
      <div {...this.props}>
        {this.props.children}
      </div>
    );
  }
};