import React, { Component } from 'react'
import img from './hola.jpeg'

export default class Home extends Component {
  render() {
    return (
        <>
            <h1 className="head1"> 🏡 </h1>
            <h2 className="head2"> Home </h2>
            <p style={{color:'blue'}}> Sri Krishna College Of Technology</p>
            <img src={img} alt="hola"/>
        </>
    )
  }
}
