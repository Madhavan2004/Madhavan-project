import React, { Component } from 'react'

export default class ClickCounter extends Component {
    constructor(props){
        super(props)
        this.state={count:0}
    }
  render() {
    return (
      <div>
        
      <button onClick={this.inc}>Click{this.state.count}</button>
      </div>
    )
  }
  inc=()=>{this.setState(
    {count:this.state.count+1}
  )}
}
