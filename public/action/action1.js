import React,{Component} from 'react'
import TweenOne from 'rc-tween-one'

export default class index extends Component{
  constructor(props){
    super(props)
    this.animation = { left: '20%', yoyo: true, repeat: -1, duration: 1000 }
  }

  componentDidMount(){}

  render() {
    return (
      <TweenOne
        className="code-box-shape"
        style={{width:"100px",height:"200px",background:"red",left: '-20%'}} animation={this.animation} />
    );
  }
}