import React from 'react'

type list = {

name:{
    first:string,
    last:string
}[]

}

export default function PersonList(props:list) {
  return (
    <div> 
   {props.name.map(x => {
       return (
          <h2>{x.first}{x.last}</h2> 
       )
   })}
    </div>
  )
}
