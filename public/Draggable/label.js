
import React,{Component} from 'react'
import {Link} from 'react-router'
import {render} from 'react-dom'
import Sortable from 'react-anything-sortable'

import SortableItem  from './children/SortableItem'

export default class index extends Component{
   constructor() {
    super();
    this.state = {
        result:['react','angular','backbone'],
        sort:[]
    };
    this.handleSort=this.handleSort.bind(this)
  }


  componentDidMount(){
    this.setState({
        sort:[
          {id:1,name:1},{id:2,name:2},{id:3,name:3}
        ]
    })
  }

  handleSort(data) {
    this.setState({
      result: data.join(' ')
    });
  }

  render() {
    return (
      <div className="demo-container">
        <p className="sort-result">result: {this.state.result}</p>
          {
            this.state.sort.length>0?
            (
              <Sortable onSort={this.handleSort} className="style-for-test">
              {
                this.state.sort.map((item,index)=>{
                  return(
                    <SortableItem sortData={item.id} key={index}>
                      {item.name}
                    </SortableItem>
                  )
                })
              }
              </Sortable>
            ):null
          }
      </div>
    );
  }
}