import React, { Component } from 'react'

export default class ListEx extends Component {
  render() {
    const cars= ["1000k{🚖🏳‍🌈Ferrari} ","2000k{🚖🏳‍🌈Lamboghini} ","1000k{🚔🏴‍☠️McLaren} ","3000k{🚔🏴‍☠️RollsRoyce} "]
    const offer=["100% discount🤷‍♂️"]
    const listCars=cars.map((i)=>" $ "+i);
    console.log(listCars);
    return (
        <React.Fragment>
        <h1>{listCars}</h1>
        <h2>{offer}</h2>
        </React.Fragment>
    )
  }
}
