import React from 'react'

export default function ListEx2() {
    const cars=[
        {model:"Ferrari",id:1},
        {model:"Lamboghini",id:2},
        {model:"McLaren",id:3},
        {model:"RollsRoyce",id:4}
    ];
  return (
    <h1>{cars.map((val)=><li key={val.id}>{val.model}</li>)}
    </h1>
  )
}
