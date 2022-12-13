import React, { Component } from 'react'

export default class HoverCounter extends Component {
  constructor(props)
  {
    super(props)
    this.state={count:0}
  }
  inc=()=>
  {
    this.setState(
      {
        count:this.state.count+1
      }
    )
  }
  render() {
    return (
      <div>
        <button onMouseMove={this.inc}>Hover{this.state.count}</button>
      </div>
    )
  }
}
