import React from 'react'

type person =  {

name : {
    first: string
    last: string
}
}

export default function Person(props: person) {
  return (

    <div>Hello {props.name.first} {props.name.last}</div>
  )
}
