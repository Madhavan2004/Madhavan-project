import React, { Component } from 'react'

export default class Student extends Component {
  render() {
    return (
      <div>I am a {this.props.dept}👨‍🎓 student</div>
    );
  }
}
